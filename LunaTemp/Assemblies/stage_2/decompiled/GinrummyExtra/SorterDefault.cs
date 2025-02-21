using System.Collections.Generic;
using System.Linq;

namespace GinrummyExtra
{
	public class SorterDefault
	{
		private static readonly List<int> BITSetHands = new List<int>();

		private static int _queueSize;

		private const int Color0 = 1;

		private const int Color1 = 2;

		private const int Color2 = 4;

		private const int Color3 = 8;

		private const int INTPerHand = 4;

		private static int GetCount(int offset, int stone)
		{
			int bitOffset = stone / 32;
			int bitIndex = stone % 32;
			return ((BITSetHands[bitOffset + offset] & (1 << bitIndex)) != 0) ? 1 : 0;
		}

		private static void SetCount(int offset, int stone, int count)
		{
			int bitOffset = stone / 32;
			int bitIndex = stone % 32;
			if (count > 0)
			{
				BITSetHands[offset + bitOffset] |= 1 << bitIndex;
			}
			else
			{
				BITSetHands[offset + bitOffset] &= ~(1 << bitIndex);
			}
		}

		private static void IncCount(int offset, int stone, int delta)
		{
			SetCount(offset, stone, GetCount(offset, stone) + delta);
		}

		private static void ColorGroup(int hand, int stone, int length)
		{
			int val = stone | (length << 8);
			BITSetHands[hand + 3] = val;
			for (int i = 0; i < length; i++)
			{
				IncCount(hand, stone + i, -1);
			}
		}

		private static void NumberGroup(int hand, int number, int colors)
		{
			int val = number | 0x80 | (colors << 8);
			BITSetHands[hand + 3] = val;
			for (int i = 0; i < 4; i++)
			{
				if ((colors & (1 << i)) != 0)
				{
					IncCount(hand, number + i * 13, -1);
				}
			}
		}

		private static int AddHand(int sourceHand = -1)
		{
			if (_queueSize >= BITSetHands.Count)
			{
				for (int k = 0; k < 4; k++)
				{
					BITSetHands.Add(0);
				}
			}
			if (sourceHand == -1)
			{
				for (int j = 0; j < 4; j++)
				{
					BITSetHands[_queueSize + j] = 0;
				}
			}
			else
			{
				for (int i = 0; i < 4; i++)
				{
					BITSetHands[_queueSize + i] = BITSetHands[sourceHand + i];
				}
			}
			BITSetHands[_queueSize + 2] = sourceHand;
			BITSetHands[_queueSize + 3] = 0;
			int offset = _queueSize;
			_queueSize += 4;
			return offset;
		}

		private static Card RemoveCard(List<Card> cards, int no)
		{
			Card result = null;
			for (int i = 0; i < cards.Count; i++)
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
			List<Card> cards = new List<Card>(orgCards);
			cards.Sort((Card c1, Card c2) => c1.No % 13 * 100 + c1.No / 13 - c2.No % 13 * 100 + c2.No / 13);
			_queueSize = 0;
			AddHand();
			foreach (Card c3 in cards.Where((Card t) => t != null))
			{
				IncCount(0, c3.No, 1);
			}
			int queuePtr = 0;
			while (_queueSize < 192000 && queuePtr < _queueSize)
			{
				PlayX(queuePtr);
				queuePtr += 4;
			}
			int bestScore = 99999999;
			int bestHand = -1;
			for (int p = 0; p < _queueSize; p += 4)
			{
				int score = 0;
				for (int i = 0; i < 52; i++)
				{
					score += GetCount(p, i) * (i % 13 + 1);
				}
				if (score < bestScore)
				{
					bestScore = score;
					bestHand = p;
				}
			}
			if (bestHand == -1)
			{
				return orgCards;
			}
			List<Card> pairs = new List<Card>();
			for (int p = bestHand; p != -1; p = BITSetHands[p + 2])
			{
				int val = BITSetHands[p + 3];
				if ((val & 0x80) == 0)
				{
					int count = (val >> 8) & 0xF;
					if (count > 0)
					{
						int start = val & 0x3F;
						for (int k = 0; k < count; k++)
						{
							int target2 = start + k;
							Card card2 = RemoveCard(cards, target2);
							if (card2 == null)
							{
								return orgCards;
							}
							pairs.Add(card2);
						}
					}
				}
				else
				{
					int colors = (val >> 8) & 0xF;
					if (colors > 0)
					{
						int number = val & 0x3F;
						for (int j = 0; j < 4; j++)
						{
							if ((colors & (1 << j)) != 0)
							{
								int target = number + j * 13;
								Card card = RemoveCard(cards, target);
								if (card == null)
								{
									return orgCards;
								}
								pairs.Add(card);
							}
						}
					}
				}
			}
			pairs.AddRange(cards);
			if (!pairs.All(orgCards.Contains) || pairs.Count != orgCards.Count)
			{
				return orgCards;
			}
			return pairs;
		}

		private static void PlayX(int hand)
		{
			for (int number = 0; number < 13; number++)
			{
				int color2 = ((GetCount(hand, number) > 0) ? 1 : 0);
				int color3 = ((GetCount(hand, number + 13) > 0) ? 1 : 0);
				int color4 = ((GetCount(hand, number + 26) > 0) ? 1 : 0);
				int color5 = ((GetCount(hand, number + 39) > 0) ? 1 : 0);
				if (color2 + color3 + color4 + color5 == 4)
				{
					int newHand5 = AddHand(hand);
					NumberGroup(newHand5, number, 15);
				}
				if (color2 + color3 + color4 == 3)
				{
					int newHand4 = AddHand(hand);
					NumberGroup(newHand4, number, 7);
				}
				if (color2 + color4 + color5 == 3)
				{
					int newHand3 = AddHand(hand);
					NumberGroup(newHand3, number, 13);
				}
				if (color3 + color4 + color5 == 3)
				{
					int newHand2 = AddHand(hand);
					NumberGroup(newHand2, number, 14);
				}
				if (color2 + color3 + color5 == 3)
				{
					int newHand = AddHand(hand);
					NumberGroup(newHand, number, 11);
				}
			}
			for (int color = 0; color < 4; color++)
			{
				int start = color * 13;
				int end = start + 13;
				while (start < end)
				{
					for (; start < end && GetCount(hand, start) == 0; start++)
					{
					}
					int checkPoint = start;
					for (; start < end && GetCount(hand, start) > 0; start++)
					{
					}
					int length = start - checkPoint;
					if (length < 3)
					{
						continue;
					}
					for (int window = 3; window < length + 1; window++)
					{
						for (int windowPos = 0; windowPos + window <= length; windowPos++)
						{
							int newHand6 = AddHand(hand);
							ColorGroup(newHand6, checkPoint + windowPos, window);
						}
					}
				}
			}
		}
	}
}
