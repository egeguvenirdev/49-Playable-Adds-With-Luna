using System;
using System.Collections.Generic;
using System.Linq;


namespace GinrummyExtra
{
    public class HandEvaluator
    {
        public class Result
        {
            internal List<Card> deadWoodCards;
            internal List<List<Card>> melds;
            internal int deadWoodScore;
            internal int biggestDeadWoodScore;
        }
        private class DummyCard
        {
            internal int no;
        }
        private class Hand
        {
            internal readonly List<int[]> melds = new();
            internal int left;
        }
        
        private static List<Hand> _patterns = new();

        private static void Play(Hand hand, List<Hand> handList, int count)
        {
            var len = count - hand.left;
            if (len < 3) return;

            for (var win = 3; win <= len; win++)
            {
                for (var x = 0; x <= len - win; x++)
                {
                    var h = new Hand();
                    h.melds.AddRange(hand.melds);
                    h.melds.Add(new[] { x + hand.left, win });
                    h.left = x + hand.left + win;
                    handList.Add(h);
                }
            }
        }

        private static void SetPatterns()
        {
            if (_patterns.Count > 0) return;
            var hand = new Hand();
            var list = new List<Hand> { hand };

            var ptr = 0;
            while (ptr < list.Count)
                Play(list[ptr++], list, 11);

            _patterns = list;
        }

        public static Result SplitIntoMelds(List<Card> handCards)
        {
            var cards = handCards;
            SetPatterns();
            Hand bestHand = null;
            var best = new Result
            {
                deadWoodCards = cards,
                melds = new List<List<Card>>()
            };

            var bestScore = 0;
            var hashedScores = new Dictionary<int, int>();

            foreach (var hh in _patterns)
            {
                var score = 0;

                foreach (var p in hh.melds)
                {
                    if (p[0] + p[1] > cards.Count) continue;
                    var hash = HashMeld(p);
                    if (hashedScores.TryGetValue(hash, out int hasScore))
                    {
                        score += hasScore;
                    }
                    else
                    {
                        var cSub = cards.GetRange(p[0], p[1]);
                        var runScore = Math.Max(RunCheck(cSub), RunCheck(cSub, true));
                        score += Math.Max(SetCheck(cSub), runScore); //start index length verip perf
                        hashedScores.Add(hash, score);
                    }

                    if (score <= bestScore) continue;
                    bestScore = score;
                    bestHand = hh;
                }
            }

            if (bestHand != null && bestScore > 0)
            {
                var pTemp = new List<List<Card>>();
                var dTemp = new List<Card>();
                var indexMap = new int[cards.Count];

                bestHand.melds.ForEach(p =>
                {
                    pTemp.Add(cards.GetRange(p[0], p[1]));
                    for (var i = p[0]; i < p[0] + p[1]; i++)
                    {
                        indexMap[i] = 1;
                    }
                });

                for (var i = 0; i < indexMap.Length; i++)
                {
                    if (indexMap[i] == 0) dTemp.Add(cards[i]);
                }

                best.melds = pTemp;
                best.deadWoodCards = dTemp;
            }
            
            var deadWoodScore = 0;
            var biggestDeadWoodScore = 0;

            foreach (var card in best.deadWoodCards)
            {
                var score = GetCardScore(card.No);
                deadWoodScore += score;
                biggestDeadWoodScore = Math.Max(biggestDeadWoodScore, score);
            }

            best.deadWoodScore = deadWoodScore;
            best.biggestDeadWoodScore = biggestDeadWoodScore;

            return best;
        }

        private static int HashMeld(int[] meld) =>  meld[0] * 100 + meld[1];

        private static int SetCheck(List<Card> set)
        {
            var sOrdered = set.OrderBy(c => c.No).ToList();

            var jokerCount = sOrdered.FindAll(c => c.No == 52).Count;

            if (sOrdered.Count is > 4 or < 3) return 0;

            if (jokerCount > 0) sOrdered.RemoveRange(sOrdered.Count - jokerCount, jokerCount);

            var realNo = sOrdered.Count > 0  ? sOrdered[0].No % 13 + 1 : 5;

            if (jokerCount >= 2) // 1 j j j , 1 1 j j
            {
                switch (sOrdered.Count)
                {
                    case 1:
                        return realNo + 5 * jokerCount;
                    case 0:
                        return 5 * jokerCount; //max joker count is 5
                }
            }

            var i = 1;
            while (i < sOrdered.Count)
            {
                if (sOrdered[i].No % 13 + 1 == realNo && sOrdered[i - 1] != sOrdered[i])
                    i++;
                else
                    return 0;
            }

            return sOrdered.Sum(c => c.No % 13 + 1) + 5 * jokerCount;
        }
        
        private static int RunCheck(List<Card> group, bool rev = false)
        {
            if (group.Count is > 13 or < 3) return 0;

            if (rev) group.Reverse();

            var temp = new DummyCard[group.Count];

            // Copy properties to DummyCard instances
            for (var i = 0; i < group.Count; i++)
                temp[i] = new DummyCard { no = group[i].No };

            for (var i = 0; i < group.Count; i++)
            {
                if (group[i].No == 52) continue;
                var realNo = group[i].No % 13 + 1;
                for (var j = 0; j < temp.Length; j++)
                {
                    temp[j].no = realNo - i + j;

                    if (group[j].No != 52 && group[j].No % 13 + 1 != temp[j].no)
                        return 0;
                }
                if (temp[0].no <= 0) return 0;
                if (temp[^1].no > 13) return 0;
                break;
            }

            var color = -1;
            foreach (var card in group)
            {
                if (card.No == 52) continue;
                if (color == -1)
                    color = card.No / 13;
                if (card.No / 13 != color)
                    return 0;
            }

            var score = 0;
            foreach (var card in group)
                score += card.No == 52 ? 5 : card.No % 13 + 1;

            return score;
        }

        public static int GetCardScore(int card)
        {
            if (card == 52) return 10;
            var cardScore = card % 13;
            cardScore++;
            return cardScore > 10 ? 10 : cardScore;
        }

        public static Card FindJokerToDiscard(List<Card> cards)
        {
            var discardSprite = SplitIntoMelds(cards).deadWoodCards.FirstOrDefault(card => card.No == 52);
            if (discardSprite != null) return discardSprite;
            
            var numberOfJokers = cards.Count(card => card.No == 52);
            for (var i = 0; i < numberOfJokers; i++)
            {
                var count = 0;
                for (var j = 0; j < cards.Count; j++)
                {
                    if (cards[j].No != 52) continue;
                    if (count == i)
                    {
                        var newCards = new List<Card>(cards);
                        var discard = newCards[j];
                        newCards.Remove(discard);
                        if (SplitIntoMelds(newCards).deadWoodCards.Count > 0)
                            break;
                        return discard;
                    }
                    count++;
                }
            }
            return null;
        }
    }
}