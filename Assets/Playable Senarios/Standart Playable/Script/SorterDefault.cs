using System.Collections.Generic;
using System.Linq;


namespace GinrummyExtra
{
    /// <summary>
    /// Sort without joker
    /// </summary>
    public class SorterDefault
    {
        private static readonly List<int> BITSetHands = new();
        private static int _queueSize;

        private const int Color0 = 1 << 0;
        private const int Color1 = 1 << 1;
        private const int Color2 = 1 << 2;
        private const int Color3 = 1 << 3;

        private const int INTPerHand = 4;

        private static int GetCount(int offset, int stone)
        {
            var bitOffset = stone / 32;
            var bitIndex = stone % 32;
            return (BITSetHands[bitOffset + offset] & (1 << bitIndex)) != 0 ? 1 : 0;
        }

        private static void SetCount(int offset, int stone, int count)
        {
            var bitOffset = stone / 32;
            var bitIndex = stone % 32;
            if (count > 0)
                BITSetHands[offset + bitOffset] |= 1 << bitIndex;
            else
                BITSetHands[offset + bitOffset] &= ~(1 << bitIndex);
        }

        private static void IncCount(int offset, int stone, int delta)
        {
            SetCount(offset, stone, GetCount(offset, stone) + delta);
        }

        private static void ColorGroup(int hand, int stone, int length)
        {
            var val = stone | (length << 8);
            BITSetHands[hand + 3] = val;
            for (var i = 0; i < length; i++)
            {
                IncCount(hand, stone + i, -1);
            }
        }

        private static void NumberGroup(int hand, int number, int colors)
        {
            var val = number | (1 << 7) | (colors << 8);
            BITSetHands[hand + 3] = val;
            for (var i = 0; i < 4; i++)
            {
                if ((colors & (1 << i)) != 0) IncCount(hand, number + i * 13, -1);
            }
        }

        private static int AddHand(int sourceHand = -1)
        {
            if (_queueSize >= BITSetHands.Count)
            {
                for (var i = 0; i < INTPerHand; i++)
                {
                    BITSetHands.Add(0);
                }
            }

            if (sourceHand == -1)
                for (var i = 0; i < INTPerHand; i++)
                    BITSetHands[_queueSize + i] = 0;
            else
                for (var i = 0; i < INTPerHand; i++)
                    BITSetHands[_queueSize + i] = BITSetHands[sourceHand + i];

            BITSetHands[_queueSize + 2] = sourceHand;
            BITSetHands[_queueSize + 3] = 0;
            var offset = _queueSize;
            _queueSize += INTPerHand;

            return offset;
        }

        private static Card RemoveCard(List<Card> cards, int no)
        {
            Card result = null;
            for (var i = 0; i < cards.Count; i++)
            {
                if (cards[i] != null && cards[i].No == no)
                {
                    result = cards[i];
                    cards.RemoveAt(i);
                    break;
                }
            }

            return result;
        }

        public static List<Card> Sort(List<Card> orgCards)
        {
            return Play(orgCards);
        }

        private static List<Card> Play(List<Card> orgCards)
        {
            var cards = new List<Card>(orgCards);
            cards.Sort((c1, c2) => (c1.No % 13) * 100 + c1.No / 13 - (c2.No % 13) * 100 + c2.No / 13);
            _queueSize = 0;
            AddHand();
            foreach (var c in cards.Where(t => t != null))
            {
                IncCount(0, c.No, 1);
            }

            var queuePtr = 0;
            while (_queueSize < INTPerHand * 48000 && queuePtr < _queueSize)
            {
                PlayX(queuePtr);
                queuePtr += INTPerHand;
            }

            var bestScore = 99999999;
            var bestHand = -1;
            var p = 0;
            while (p < _queueSize)
            {
                var score = 0;
                for (var i = 0; i < 52; i++)
                {
                    score += GetCount(p, i) * ((i % 13) + 1);
                }

                if (score < bestScore)
                {
                    bestScore = score;
                    bestHand = p;
                }

                p += INTPerHand;
            }

            if (bestHand == -1) return orgCards;

            var pairs = new List<Card>();
            p = bestHand;
            while (p != -1)
            {
                var val = BITSetHands[p + 3];
                if ((val & (1 << 7)) == 0)
                {
                    var count = (val >> 8) & 15;
                    if (count > 0) //elimde varsa (o bit doluysa)
                    {
                        var start = val & 63;
                        for (var i = 0; i < count; i++)
                        {
                            var target = start + i;
                            var card = RemoveCard(cards, target);
                            if (card == null) return orgCards;
                            pairs.Add(card);
                        }
                    }
                }
                else
                {
                    var colors = (val >> 8) & 15;
                    if (colors > 0)
                    {
                        var number = val & 63;
                        for (var i = 0; i < 4; i++)
                        {
                            if ((colors & (1 << i)) != 0)
                            {
                                var target = number + i * 13;
                                var card = RemoveCard(cards, target);
                                if (card == null) return orgCards;
                                pairs.Add(card);
                            }
                        }
                    }
                }

                p = BITSetHands[p + 2];
            }

            pairs.AddRange(cards);

            if (!pairs.All(orgCards.Contains) || pairs.Count != orgCards.Count) return orgCards;

            return pairs;
        }

        private static void PlayX(int hand)
        {
            for (var number = 0; number < 13; number++)
            {
                var color0 = GetCount(hand, number) > 0 ? 1 : 0;
                var color1 = GetCount(hand, number + 13) > 0 ? 1 : 0;
                var color2 = GetCount(hand, number + 26) > 0 ? 1 : 0;
                var color3 = GetCount(hand, number + 39) > 0 ? 1 : 0;

                if (color0 + color1 + color2 + color3 == 4)
                {
                    var newHand = AddHand(hand);
                    NumberGroup(newHand, number, Color0 | Color1 | Color2 | Color3);
                }

                if (color0 + color1 + color2 == 3)
                {
                    var newHand = AddHand(hand);
                    NumberGroup(newHand, number, Color0 | Color1 | Color2);
                }

                if (color0 + color2 + color3 == 3)
                {
                    var newHand = AddHand(hand);
                    NumberGroup(newHand, number, Color0 | Color2 | Color3);
                }

                if (color1 + color2 + color3 == 3)
                {
                    var newHand = AddHand(hand);
                    NumberGroup(newHand, number, Color1 | Color2 | Color3);
                }

                if (color0 + color1 + color3 == 3)
                {
                    var newHand = AddHand(hand);
                    NumberGroup(newHand, number, Color0 | Color1 | Color3);
                }
            }

            for (var color = 0; color < 4; color++)
            {
                var start = color * 13;
                var end = start + 13;
                while (start < end)
                {
                    while (start < end && GetCount(hand, start) == 0) start++;
                    var checkPoint = start;
                    while (start < end && GetCount(hand, start) > 0) start++;
                    var length = start - checkPoint;

                    if (length < 3) continue;
                    for (var window = 3; window < length + 1; window++)
                    {
                        var windowPos = 0;
                        while (windowPos + window <= length)
                        {
                            var newHand = AddHand(hand);
                            ColorGroup(newHand, checkPoint + windowPos, window);
                            windowPos++;
                        }
                    }
                }
            }
        }
    }
}