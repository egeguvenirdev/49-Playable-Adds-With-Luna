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
			internal readonly List<int[]> melds = new List<int[]>();

			internal int left;
		}

		private static List<Hand> _patterns = new List<Hand>();

		private static void Play(Hand hand, List<Hand> handList, int count)
		{
			int len = count - hand.left;
			if (len < 3)
			{
				return;
			}
			for (int win = 3; win <= len; win++)
			{
				for (int x = 0; x <= len - win; x++)
				{
					Hand h = new Hand();
					h.melds.AddRange(hand.melds);
					h.melds.Add(new int[2]
					{
						x + hand.left,
						win
					});
					h.left = x + hand.left + win;
					handList.Add(h);
				}
			}
		}

		private static void SetPatterns()
		{
			if (_patterns.Count <= 0)
			{
				Hand hand = new Hand();
				List<Hand> list = new List<Hand> { hand };
				int ptr = 0;
				while (ptr < list.Count)
				{
					Play(list[ptr++], list, 11);
				}
				_patterns = list;
			}
		}

		public static Result SplitIntoMelds(List<Card> handCards)
		{
			SetPatterns();
			Hand bestHand = null;
			Result best = new Result
			{
				deadWoodCards = handCards,
				melds = new List<List<Card>>()
			};
			int bestScore = 0;
			Dictionary<int, int> hashedScores = new Dictionary<int, int>();
			foreach (Hand hh in _patterns)
			{
				int score2 = 0;
				foreach (int[] p2 in hh.melds)
				{
					if (p2[0] + p2[1] <= handCards.Count)
					{
						int hash = HashMeld(p2);
						if (hashedScores.TryGetValue(hash, out var hasScore))
						{
							score2 += hasScore;
						}
						else
						{
							List<Card> cSub = handCards.GetRange(p2[0], p2[1]);
							int runScore = Math.Max(RunCheck(cSub), RunCheck(cSub, true));
							score2 += Math.Max(SetCheck(cSub), runScore);
							hashedScores.Add(hash, score2);
						}
						if (score2 > bestScore)
						{
							bestScore = score2;
							bestHand = hh;
						}
					}
				}
			}
			if (bestHand != null && bestScore > 0)
			{
				List<List<Card>> pTemp = new List<List<Card>>();
				List<Card> dTemp = new List<Card>();
				int[] indexMap = new int[handCards.Count];
				bestHand.melds.ForEach(delegate(int[] p)
				{
					pTemp.Add(handCards.GetRange(p[0], p[1]));
					for (int j = p[0]; j < p[0] + p[1]; j++)
					{
						indexMap[j] = 1;
					}
				});
				for (int i = 0; i < indexMap.Length; i++)
				{
					if (indexMap[i] == 0)
					{
						dTemp.Add(handCards[i]);
					}
				}
				best.melds = pTemp;
				best.deadWoodCards = dTemp;
			}
			int deadWoodScore = 0;
			int biggestDeadWoodScore = 0;
			foreach (Card card in best.deadWoodCards)
			{
				int score = GetCardScore(card.No);
				deadWoodScore += score;
				biggestDeadWoodScore = Math.Max(biggestDeadWoodScore, score);
			}
			best.deadWoodScore = deadWoodScore;
			best.biggestDeadWoodScore = biggestDeadWoodScore;
			return best;
		}

		private static int HashMeld(int[] meld)
		{
			return meld[0] * 100 + meld[1];
		}

		private static int SetCheck(List<Card> set)
		{
			List<Card> sOrdered = set.OrderBy((Card c) => c.No).ToList();
			int jokerCount = sOrdered.FindAll((Card c) => c.No == 52).Count;
			int count = sOrdered.Count;
			if (count > 4 || count < 3)
			{
				return 0;
			}
			if (jokerCount > 0)
			{
				sOrdered.RemoveRange(sOrdered.Count - jokerCount, jokerCount);
			}
			int realNo = ((sOrdered.Count > 0) ? (sOrdered[0].No % 13 + 1) : 5);
			if (jokerCount >= 2)
			{
				switch (sOrdered.Count)
				{
				case 1:
					return realNo + 5 * jokerCount;
				case 0:
					return 5 * jokerCount;
				}
			}
			for (int i = 1; i < sOrdered.Count; i++)
			{
				if (sOrdered[i].No % 13 + 1 != realNo || !(sOrdered[i - 1] != sOrdered[i]))
				{
					return 0;
				}
			}
			return sOrdered.Sum((Card c) => c.No % 13 + 1) + 5 * jokerCount;
		}

		private static int RunCheck(List<Card> group, bool rev = false)
		{
			int count = group.Count;
			if (count > 13 || count < 3)
			{
				return 0;
			}
			if (rev)
			{
				group.Reverse();
			}
			DummyCard[] temp = new DummyCard[group.Count];
			for (int i = 0; i < group.Count; i++)
			{
				temp[i] = new DummyCard
				{
					no = group[i].No
				};
			}
			for (int j = 0; j < group.Count; j++)
			{
				if (group[j].No == 52)
				{
					continue;
				}
				int realNo = group[j].No % 13 + 1;
				for (int k = 0; k < temp.Length; k++)
				{
					temp[k].no = realNo - j + k;
					if (group[k].No != 52 && group[k].No % 13 + 1 != temp[k].no)
					{
						return 0;
					}
				}
				if (temp[0].no <= 0)
				{
					return 0;
				}
				if (temp[temp.Length - 1].no > 13)
				{
					return 0;
				}
				break;
			}
			int color = -1;
			foreach (Card card2 in group)
			{
				if (card2.No != 52)
				{
					if (color == -1)
					{
						color = card2.No / 13;
					}
					if (card2.No / 13 != color)
					{
						return 0;
					}
				}
			}
			int score = 0;
			foreach (Card card in group)
			{
				score += ((card.No == 52) ? 5 : (card.No % 13 + 1));
			}
			return score;
		}

		public static int GetCardScore(int card)
		{
			if (card == 52)
			{
				return 10;
			}
			int cardScore = card % 13;
			cardScore++;
			return (cardScore > 10) ? 10 : cardScore;
		}

		public static Card FindJokerToDiscard(List<Card> cards)
		{
			Card discardSprite = SplitIntoMelds(cards).deadWoodCards.FirstOrDefault((Card card) => card.No == 52);
			if (discardSprite != null)
			{
				return discardSprite;
			}
			int numberOfJokers = cards.Count((Card card) => card.No == 52);
			for (int i = 0; i < numberOfJokers; i++)
			{
				int count = 0;
				for (int j = 0; j < cards.Count; j++)
				{
					if (cards[j].No != 52)
					{
						continue;
					}
					if (count == i)
					{
						List<Card> newCards = new List<Card>(cards);
						Card discard = newCards[j];
						newCards.Remove(discard);
						if (SplitIntoMelds(newCards).deadWoodCards.Count > 0)
						{
							break;
						}
						return discard;
					}
					count++;
				}
			}
			return null;
		}
	}
}
