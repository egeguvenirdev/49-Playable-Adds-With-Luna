using System;
using System.Collections.Generic;
using System.Linq;

namespace GinrummyExtra
{
	public class SorterJoker
	{
		private readonly List<List<Card>> _suit = new List<List<Card>>();

		private readonly List<List<Card>> _rank = new List<List<Card>>();

		private readonly List<List<Card>> _possibleSuit = new List<List<Card>>();

		private readonly List<List<Card>> _possibleRank = new List<List<Card>>();

		private readonly List<Card> _jokers = new List<Card>();

		private List<Card> _discard = new List<Card>();

		private List<Card> _result;

		private int _score;

		private bool _reverseSort;

		private bool _rankReverseSort;

		private bool _appendJokerRight;

		private bool _rankFirst;

		private int _rankOrder;

		private static readonly int[,] RankOrders = new int[24, 4]
		{
			{ 0, 1, 2, 3 },
			{ 0, 1, 3, 2 },
			{ 0, 2, 1, 3 },
			{ 0, 2, 3, 1 },
			{ 0, 3, 1, 2 },
			{ 0, 3, 2, 1 },
			{ 1, 0, 2, 3 },
			{ 1, 0, 3, 2 },
			{ 1, 2, 0, 3 },
			{ 1, 2, 3, 0 },
			{ 1, 3, 0, 2 },
			{ 1, 3, 2, 0 },
			{ 2, 0, 1, 3 },
			{ 2, 0, 3, 1 },
			{ 2, 1, 0, 3 },
			{ 2, 1, 3, 0 },
			{ 2, 3, 0, 1 },
			{ 2, 3, 1, 0 },
			{ 3, 0, 1, 2 },
			{ 3, 0, 2, 1 },
			{ 3, 1, 0, 2 },
			{ 3, 1, 2, 0 },
			{ 3, 2, 0, 1 },
			{ 3, 2, 1, 0 }
		};

		private static int _Rank(Card card)
		{
			return card.No % 13;
		}

		private static int _Suit(Card card)
		{
			return card.No / 13;
		}

		private int _CardNoWithRankOrder(Card s)
		{
			return RankOrders[_rankOrder, _Suit(s)] * 13 + _Rank(s);
		}

		private int _SuitCompare(Card s1, Card s2)
		{
			return _reverseSort ? (_CardNoWithRankOrder(s2) - _CardNoWithRankOrder(s1)) : (_CardNoWithRankOrder(s1) - _CardNoWithRankOrder(s2));
		}

		private int _RankCompare(Card s1, Card s2)
		{
			return _rankReverseSort ? (_Rank(s2) * 1000 + RankOrders[_rankOrder, _Suit(s2)] - (_Rank(s1) * 1000 + RankOrders[_rankOrder, _Suit(s1)])) : (_Rank(s1) * 1000 + RankOrders[_rankOrder, _Suit(s1)] - (_Rank(s2) * 1000 + RankOrders[_rankOrder, _Suit(s2)]));
		}

		public static List<Card> Sort(List<Card> cards)
		{
			SorterJoker best = null;
			for (int sortType = 0; sortType < 2; sortType++)
			{
				for (int appendSide = 0; appendSide < 2; appendSide++)
				{
					for (int rankFirst = 0; rankFirst < 2; rankFirst++)
					{
						for (int rankSortType = 0; rankSortType < 2; rankSortType++)
						{
							for (int rankOrder = 0; rankOrder < 4; rankOrder++)
							{
								for (int collectJoker = 0; collectJoker < 2; collectJoker++)
								{
									SorterJoker sorter = new SorterJoker
									{
										_reverseSort = (sortType == 1),
										_rankReverseSort = (rankSortType == 1),
										_rankOrder = rankOrder,
										_appendJokerRight = (appendSide == 1),
										_rankFirst = (rankFirst == 1)
									};
									if (sorter._Sort(cards, collectJoker == 0) && (best == null || best._score > sorter._score))
									{
										best = sorter;
									}
								}
							}
						}
					}
				}
			}
			return (best != null) ? best._result : cards;
		}

		private int _SuitScore(List<Card> cards)
		{
			if (cards.Count <= 2 || cards.Contains(null))
			{
				return 0;
			}
			int no = _FindSuitStart(cards);
			int rank = no % 13;
			int score = 0;
			foreach (Card card in cards)
			{
				rank++;
				if (rank > 10)
				{
					rank = 10;
				}
				if (card.No != 52)
				{
					score += rank;
				}
			}
			return -10000 - score;
		}

		private int _RankScore(List<Card> cards)
		{
			if (cards.Count <= 2 || cards.Contains(null))
			{
				return 0;
			}
			int jokerCount = 0;
			foreach (Card card2 in cards)
			{
				if (card2.No == 52)
				{
					jokerCount++;
				}
			}
			foreach (Card card in cards)
			{
				int no = card.No;
				if (no != 52)
				{
					int rank = Math.Min(no % 13 + 1, 10);
					return -10000 - rank * (cards.Count - jokerCount);
				}
			}
			return 0;
		}

		private void _DoCollect(List<Card> cards, Func<Card, Card, int> sortFunc, Action<List<Card>> collectFunc)
		{
			cards.AddRange(_discard);
			cards.Sort((Card s1, Card s2) => sortFunc(s1, s2));
			_DiscardSame(cards);
			collectFunc(cards);
		}

		private void _CollectWithJoker(List<Card> cards)
		{
			while (_jokers.Count > 0)
			{
				List<Card> original = new List<Card>();
				original.AddRange(_discard);
				cards.AddRange(_discard);
				_DiscardSame(cards);
				int[] scoreList = new int[3]
				{
					_CollectSuitWithJoker3Cards(cards, false),
					0,
					0
				};
				cards.AddRange(original);
				scoreList[1] = _CollectSuitWithJoker2Cards(cards, false);
				cards.AddRange(original);
				scoreList[2] = _CollectRankWithJoker(cards, false);
				cards.AddRange(original);
				if (scoreList.All((int o) => o == 0))
				{
					break;
				}
				switch (scoreList.ToList().IndexOf(scoreList.Min()))
				{
				case 0:
					_CollectSuitWithJoker3Cards(cards, true);
					break;
				case 1:
					_CollectSuitWithJoker2Cards(cards, true);
					break;
				case 2:
					_CollectRankWithJoker(cards, true);
					break;
				}
			}
		}

		private bool _Sort(List<Card> original, bool collectJoker)
		{
			List<Card> cards = new List<Card>();
			cards.AddRange(original);
			cards.Sort((Card s1, Card s2) => s1.No - s2.No);
			while (cards.Count > 0)
			{
				if (cards[cards.Count - 1].No != 52)
				{
					break;
				}
				_jokers.Add(cards[cards.Count - 1]);
				cards.RemoveAt(cards.Count - 1);
			}
			_discard.AddRange(cards);
			cards.Clear();
			if (!_rankFirst)
			{
				for (int i = 0; i < 2; i++)
				{
					_DoCollect(cards, _SuitCompare, _CollectSuit);
				}
				for (int j = 0; j < 2; j++)
				{
					_DoCollect(cards, _RankCompare, delegate(List<Card> list)
					{
						_CollectRank(list);
					});
				}
				if (collectJoker)
				{
					_CollectWithJoker(cards);
				}
				while (_ExtendSuits(_discard, _suit))
				{
				}
				while (_ExtendRanks(_discard, _rank))
				{
				}
			}
			else
			{
				for (int k = 0; k < 2; k++)
				{
					_DoCollect(cards, _RankCompare, delegate(List<Card> list)
					{
						_CollectRank(list);
					});
				}
				for (int l = 0; l < 2; l++)
				{
					_DoCollect(cards, _SuitCompare, _CollectSuit);
				}
				if (collectJoker)
				{
					_CollectWithJoker(cards);
				}
				while (_ExtendRanks(_discard, _rank))
				{
				}
				while (_ExtendSuits(_discard, _suit))
				{
				}
			}
			while (_ExtendSuits(_discard, _suit))
			{
			}
			while (_ExtendRanks(_discard, _rank))
			{
			}
			while (_ExtendSuitsWithJoker(_discard, _suit))
			{
			}
			_DoCollect(cards, _SuitCompare, _CollectPossibleSuit);
			while (_ExtendSuits(_discard, _possibleSuit))
			{
			}
			while (_MergeSuits())
			{
			}
			while (_TryRankWithJoker())
			{
			}
			while (_ExtendRanks(_discard, _rank))
			{
			}
			while (_TryInsertSuit())
			{
			}
			_DoCollect(cards, _SuitCompare, _CollectSuit2);
			_DoCollect(cards, _RankCompare, _CollectRank2);
			while (_TryBuildRankFromSuits())
			{
			}
			while (_MakeDoubleJokerPer())
			{
			}
			_UseIdleJoker();
			_discard.AddRange(_jokers);
			_score = 0;
			_suit.RemoveAll((List<Card> item) => item == null);
			_rank.RemoveAll((List<Card> item) => item == null);
			_suit.ForEach(delegate(List<Card> list)
			{
				_score += _SuitScore(list);
			});
			_rank.ForEach(delegate(List<Card> list)
			{
				_score += _RankScore(list);
			});
			_result = new List<Card>();
			_suit.ForEach(delegate(List<Card> list)
			{
				_result.AddRange(list);
			});
			_rank.ForEach(delegate(List<Card> list)
			{
				_result.AddRange(list);
			});
			_possibleSuit.ForEach(delegate(List<Card> list)
			{
				_discard.AddRange(list);
			});
			_possibleRank.ForEach(delegate(List<Card> list)
			{
				_discard.AddRange(list);
			});
			_discard.RemoveAll((Card item) => item == null);
			foreach (Card card in _discard)
			{
				if (card.No != 52)
				{
					continue;
				}
				_score += 10000;
				break;
			}
			_discard = _discard.OrderBy((Card c) => c.No % 13).ToList();
			_result.AddRange(_discard);
			return true;
		}

		private void _DiscardSame(List<Card> cards)
		{
			_discard.Clear();
			for (int p = 0; p < cards.Count - 1; p++)
			{
				if (cards[p].No == cards[p + 1].No)
				{
					_discard.Add(cards[p]);
					cards.RemoveAt(p);
				}
			}
		}

		private void _CollectSuit(List<Card> cards)
		{
			while (cards.Count >= 3)
			{
				if (_Suit(cards[0]) == _Suit(cards[1]) && _Suit(cards[0]) == _Suit(cards[2]))
				{
					int r0 = _Rank(cards[0]);
					int r1 = _Rank(cards[1]);
					int r2 = _Rank(cards[2]);
					if (Math.Abs(r1 - r0) == 1 && Math.Abs(r2 - r1) == 1)
					{
						List<Card> per = new List<Card>();
						for (int i = 0; i < 3; i++)
						{
							per.Add(cards[0]);
							cards.RemoveAt(0);
						}
						if (_reverseSort)
						{
							per.Reverse();
						}
						_suit.Add(per);
						continue;
					}
				}
				_discard.Add(cards[0]);
				cards.RemoveAt(0);
			}
			_discard.AddRange(cards);
			cards.Clear();
		}

		private int _CollectRankWithJoker(List<Card> cards, bool collect)
		{
			cards.Sort(_RankCompare);
			while (cards.Count >= 2 && _jokers.Count > 0)
			{
				if (_Rank(cards[0]) == _Rank(cards[1]))
				{
					List<Card> per = new List<Card>
					{
						cards[0],
						cards[1],
						_jokers[0]
					};
					if (!collect)
					{
						cards.Clear();
						return _SuitScore(per);
					}
					_rank.Add(per);
					cards.RemoveRange(0, 2);
					_jokers.RemoveAt(0);
					break;
				}
				if (collect)
				{
					_discard.Add(cards[0]);
				}
				cards.RemoveAt(0);
			}
			if (collect)
			{
				_discard.AddRange(cards);
			}
			cards.Clear();
			return 0;
		}

		private int _CollectSuitWithJoker3Cards(List<Card> cards, bool collect)
		{
			cards.Sort(_SuitCompare);
			while (cards.Count >= 3 && _jokers.Count > 0)
			{
				if (_Suit(cards[0]) == _Suit(cards[1]) && _Suit(cards[0]) == _Suit(cards[2]))
				{
					int rank0 = _Rank(cards[0]);
					int rank1 = _Rank(cards[1]);
					int rank2 = _Rank(cards[2]);
					int distance = Math.Abs(rank0 - rank1);
					int distance2 = Math.Abs(rank1 - rank2);
					if (distance == 1 && distance2 == 2)
					{
						List<Card> per2 = new List<Card>
						{
							cards[0],
							cards[1],
							_jokers[0],
							cards[2]
						};
						if (!collect)
						{
							cards.Clear();
							return _SuitScore(per2);
						}
						_jokers.RemoveAt(0);
						cards.RemoveRange(0, 3);
						if (_reverseSort)
						{
							per2.Reverse();
						}
						_suit.Add(per2);
						break;
					}
					if (distance == 2 && distance2 == 1)
					{
						List<Card> per = new List<Card>
						{
							cards[0],
							_jokers[0],
							cards[1],
							cards[2]
						};
						if (!collect)
						{
							cards.Clear();
							return _SuitScore(per);
						}
						_jokers.RemoveAt(0);
						cards.RemoveRange(0, 3);
						if (_reverseSort)
						{
							per.Reverse();
						}
						_suit.Add(per);
						break;
					}
				}
				if (collect)
				{
					_discard.Add(cards[0]);
				}
				cards.RemoveAt(0);
			}
			if (collect)
			{
				_discard.AddRange(cards);
			}
			cards.Clear();
			return 0;
		}

		private int _CollectSuitWithJoker2Cards(List<Card> cards, bool collect)
		{
			cards.Sort(_SuitCompare);
			while (cards.Count >= 2 && _jokers.Count > 0)
			{
				if (_Suit(cards[0]) == _Suit(cards[1]))
				{
					int rank0 = _Rank(cards[0]);
					int rank1 = _Rank(cards[1]);
					int distance = Math.Abs(rank0 - rank1);
					if (distance == 1)
					{
						if ((rank1 <= rank0 || rank1 != 12 || !_appendJokerRight) && (rank0 <= rank1 || rank0 != 12 || _appendJokerRight) && (_appendJokerRight || rank0 != 0) && (!_appendJokerRight || rank1 != 0))
						{
							List<Card> per2 = new List<Card>();
							if (!_appendJokerRight)
							{
								per2.Add(_jokers[0]);
							}
							per2.Add(cards[0]);
							per2.Add(cards[1]);
							if (_appendJokerRight)
							{
								per2.Add(_jokers[0]);
							}
							if (!collect)
							{
								cards.Clear();
								return _SuitScore(per2);
							}
							_jokers.RemoveAt(0);
							cards.RemoveRange(0, 2);
							if (_reverseSort)
							{
								per2.Reverse();
							}
							_suit.Add(per2);
							break;
						}
					}
					else if (distance == 2)
					{
						List<Card> per = new List<Card>
						{
							cards[0],
							_jokers[0],
							cards[1]
						};
						if (!collect)
						{
							cards.Clear();
							return _SuitScore(per);
						}
						_jokers.RemoveAt(0);
						cards.RemoveRange(0, 2);
						if (_reverseSort)
						{
							per.Reverse();
						}
						_suit.Add(per);
						break;
					}
				}
				if (collect)
				{
					_discard.Add(cards[0]);
				}
				cards.RemoveAt(0);
			}
			if (collect)
			{
				_discard.AddRange(cards);
			}
			cards.Clear();
			return 0;
		}

		private void _CollectPossibleSuit(List<Card> cards)
		{
			while (cards.Count >= 3)
			{
				if (_Suit(cards[0]) == _Suit(cards[1]) && _Suit(cards[0]) == _Suit(cards[2]))
				{
					int r0 = _Rank(cards[0]);
					int r1 = _Rank(cards[1]);
					int r2 = _Rank(cards[2]);
					int distance0 = Math.Abs(r1 - r0);
					int distance1 = Math.Abs(r2 - r1);
					(int, int) tuple = (distance0, distance1);
					(int, int) tuple2 = tuple;
					switch (tuple2.Item1)
					{
					case 1:
					{
						int item = tuple2.Item2;
						if (item != 2)
						{
							break;
						}
						List<Card> per = new List<Card>
						{
							cards[0],
							cards[1],
							null,
							cards[2]
						};
						if (_reverseSort)
						{
							per.Reverse();
						}
						_possibleSuit.Add(per);
						cards.RemoveRange(0, 3);
						continue;
					}
					case 2:
					{
						int item = tuple2.Item2;
						if (item != 1)
						{
							break;
						}
						List<Card> per2 = new List<Card>
						{
							cards[0],
							null,
							cards[1],
							cards[2]
						};
						if (_reverseSort)
						{
							per2.Reverse();
						}
						_possibleSuit.Add(per2);
						cards.RemoveRange(0, 3);
						continue;
					}
					}
				}
				_discard.Add(cards[0]);
				cards.RemoveAt(0);
			}
			_discard.AddRange(cards);
			cards.Clear();
		}

		private void _CollectSuit2(List<Card> cards)
		{
			while (cards.Count >= 2)
			{
				int delta = Math.Abs(_Rank(cards[1]) - _Rank(cards[0]));
				if (_Suit(cards[0]) == _Suit(cards[1]) && delta == 1)
				{
					List<Card> per = new List<Card>
					{
						cards[0],
						cards[1]
					};
					if (_reverseSort)
					{
						per.Reverse();
					}
					_possibleSuit.Add(per);
					cards.RemoveRange(0, 2);
				}
				else
				{
					_discard.Add(cards[0]);
					cards.RemoveAt(0);
				}
			}
			_discard.AddRange(cards);
			cards.Clear();
		}

		private void _CollectRank(List<Card> cards, int required = 3)
		{
			while (cards.Count > 0)
			{
				int p;
				for (p = 0; p < required && p < cards.Count && _Rank(cards[p]) == _Rank(cards[0]); p++)
				{
				}
				if (p >= required)
				{
					List<Card> per = new List<Card>();
					for (int i = 0; i < p; i++)
					{
						per.Add(cards[0]);
						cards.RemoveAt(0);
					}
					_rank.Add(per);
				}
				else
				{
					_discard.Add(cards[0]);
					cards.RemoveAt(0);
				}
			}
		}

		private void _CollectRank2(List<Card> cards)
		{
			while (cards.Count >= 2)
			{
				if (_Suit(cards[0]) != _Suit(cards[1]) && _Rank(cards[1]) == _Rank(cards[0]))
				{
					List<Card> per = new List<Card>
					{
						cards[0],
						cards[1]
					};
					if (_reverseSort)
					{
						per.Reverse();
					}
					_possibleRank.Add(per);
					cards.RemoveRange(0, 2);
				}
				else
				{
					_discard.Add(cards[0]);
					cards.RemoveAt(0);
				}
			}
			_discard.AddRange(cards);
			cards.Clear();
		}

		private bool _ExtendSuits(List<Card> cards, List<List<Card>> target)
		{
			int countBefore = cards.Count;
			int p = 0;
			while (p < cards.Count)
			{
				Card src = cards[p];
				int suit = _Suit(src);
				int rank = _Rank(src);
				bool foundOnLeft = false;
				List<Card> found = target.Find(delegate(List<Card> per)
				{
					Card card = ((per[0].No == 52) ? per[1] : per[0]);
					if (_Suit(card) == suit)
					{
						int num = 0;
						for (int i = 0; i < per.Count; i++)
						{
							if (per[i].No != 52)
							{
								num = _Rank(per[i]) - i;
								break;
							}
						}
						if (num - rank == 1)
						{
							foundOnLeft = true;
							return true;
						}
						int num2 = num + per.Count - 1;
						if (num2 < 13 && rank - num2 == 1)
						{
							return true;
						}
					}
					return false;
				});
				if (found != null)
				{
					if (foundOnLeft)
					{
						found.Insert(0, src);
					}
					else
					{
						found.Add(src);
					}
					cards.RemoveAt(p);
				}
				else
				{
					p++;
				}
			}
			return countBefore != cards.Count;
		}

		private bool _ExtendSuitsWithJoker(List<Card> cards, List<List<Card>> target)
		{
			int countBefore = cards.Count;
			int p = 0;
			while (_jokers.Count > 0 && p < cards.Count)
			{
				Card src = cards[p];
				int suit = _Suit(src);
				int rank = _Rank(src);
				bool foundOnLeft = false;
				List<Card> found = target.Find(delegate(List<Card> per)
				{
					Card card = ((per[0].No == 52) ? per[1] : per[0]);
					if (_Suit(card) != suit)
					{
						return false;
					}
					int num = 0;
					for (int i = 0; i < per.Count; i++)
					{
						if (per[i].No != 52)
						{
							num = _Rank(per[i]) - i;
							break;
						}
					}
					if (num - rank == 2)
					{
						foundOnLeft = true;
						return true;
					}
					int num2 = num + per.Count - 1;
					return num2 < 13 && rank - num2 == 2;
				});
				if (found != null)
				{
					if (foundOnLeft)
					{
						found.Insert(0, _jokers[0]);
						_jokers.RemoveAt(0);
						found.Insert(0, src);
					}
					else
					{
						found.Add(_jokers[0]);
						_jokers.RemoveAt(0);
						found.Add(src);
					}
					cards.RemoveAt(p);
				}
				else
				{
					p++;
				}
			}
			return countBefore != cards.Count;
		}

		private bool _ExtendRanks(List<Card> cards, List<List<Card>> target)
		{
			int countBefore = cards.Count;
			int p = 0;
			while (p < cards.Count)
			{
				Card src = cards[p];
				int suit = _Suit(src);
				int rank = _Rank(src);
				List<Card> found = target.Find(delegate(List<Card> per)
				{
					if (per.Count >= 4)
					{
						return false;
					}
					int num = 0;
					int num2 = -1;
					foreach (Card current in per)
					{
						if (current.No != 52)
						{
							num |= 1 << _Suit(current);
							num2 = _Rank(current);
						}
					}
					return rank == num2 && (num & (1 << suit)) == 0;
				});
				if (found != null)
				{
					found.Add(src);
					cards.RemoveAt(p);
				}
				else
				{
					p++;
				}
			}
			return countBefore != cards.Count;
		}

		private int _FindSuitStart(List<Card> cards)
		{
			for (int i = 0; i < cards.Count; i++)
			{
				if (cards[i].No != 52)
				{
					return _Rank(cards[i]) - i + _Suit(cards[i]) * 13;
				}
			}
			return -1;
		}

		private bool _MergeSuits()
		{
			for (int i = 0; i < _suit.Count; i++)
			{
				List<Card> suit = _suit[i];
				int srcLeft = _FindSuitStart(suit);
				int srcLeftRank = srcLeft % 13;
				int srcRightRank = srcLeftRank + suit.Count - 1;
				bool addToLeft = false;
				if (srcRightRank >= 12)
				{
					continue;
				}
				int srcSuit = srcLeft / 13;
				List<Card> found = _suit.Find(delegate(List<Card> per)
				{
					if (suit == per)
					{
						return false;
					}
					int num = _FindSuitStart(per);
					if (num / 13 != srcSuit)
					{
						return false;
					}
					int num2 = num % 13;
					if (num2 - srcRightRank == 1)
					{
						return true;
					}
					int num3 = num2 + per.Count - 1;
					if (srcLeftRank - num3 != 1 || num3 >= 12)
					{
						return false;
					}
					addToLeft = true;
					return true;
				});
				if (found != null)
				{
					if (addToLeft)
					{
						found.AddRange(suit);
						_suit.Remove(suit);
					}
					else
					{
						suit.AddRange(found);
						_suit.Remove(found);
					}
					return true;
				}
			}
			return false;
		}

		private bool _MakeDoubleJokerPer()
		{
			int best = -1;
			int index = -1;
			for (int i = 0; i < _discard.Count; i++)
			{
				if (_Rank(_discard[i]) > best)
				{
					best = _Rank(_discard[i]);
					index = i;
				}
			}
			if (_jokers.Count < 2 || index <= -1)
			{
				return false;
			}
			List<Card> per = new List<Card> { _jokers[0] };
			_jokers.RemoveAt(0);
			per.Add(_jokers[0]);
			_jokers.RemoveAt(0);
			per.Add(_discard[index]);
			_discard.RemoveAt(index);
			_rank.Add(per);
			return true;
		}

		private void _UseIdleJoker()
		{
			while (_jokers.Count > 0)
			{
				int bestScore = -1;
				List<Card> bestSet = null;
				bool isBestLeft = false;
				foreach (List<Card> suit in _suit)
				{
					if (suit.Count < 13)
					{
						int left = _FindSuitStart(suit);
						int leftRank = left % 13;
						int rightRank = (leftRank + suit.Count - 1) % 13;
						if (rightRank != 0 && rightRank > bestScore)
						{
							bestScore = rightRank;
							bestSet = suit;
							isBestLeft = false;
						}
						else if (leftRank != 0 && leftRank > bestScore)
						{
							bestScore = leftRank;
							bestSet = suit;
							isBestLeft = true;
						}
					}
				}
				foreach (List<Card> rank in _rank)
				{
					if (rank.Count < 4)
					{
						int score = _Rank(rank.Find((Card card) => card.No != 52));
						if (score > bestScore)
						{
							bestSet = rank;
							bestScore = score;
							isBestLeft = false;
						}
					}
				}
				if (bestSet != null)
				{
					if (isBestLeft)
					{
						bestSet.Insert(0, _jokers[0]);
					}
					else
					{
						bestSet.Add(_jokers[0]);
					}
					_jokers.RemoveAt(0);
					continue;
				}
				break;
			}
		}

		private bool _TryRankWithJoker()
		{
			if (_discard.Count == 0 || _jokers.Count == 0)
			{
				return false;
			}
			foreach (Card src in _discard)
			{
				foreach (List<Card> suit in _suit)
				{
					if (suit.Count <= 3)
					{
						continue;
					}
					int suitStart = _FindSuitStart(suit);
					if (suitStart / 13 != src.No / 13)
					{
						int leftRank = suitStart % 13;
						int rightRank = (leftRank + suit.Count - 1) % 13;
						Card removed = null;
						if (leftRank == src.No % 13)
						{
							removed = suit[0];
							suit.RemoveAt(0);
						}
						else if (rightRank == src.No % 13)
						{
							removed = suit[suit.Count - 1];
							suit.RemoveAt(suit.Count - 1);
						}
						if (!(removed == null))
						{
							List<Card> list = new List<Card>
							{
								removed,
								src,
								_jokers[0]
							};
							_jokers.RemoveAt(0);
							_discard.Remove(src);
							_rank.Add(list);
							return true;
						}
					}
				}
			}
			return false;
		}

		private bool _TryInsertSuit()
		{
			if (_discard.Count == 0)
			{
				return false;
			}
			foreach (Card src in _discard)
			{
				foreach (List<Card> suit in _suit)
				{
					if (suit.Count < 5)
					{
						continue;
					}
					int suitStart = _FindSuitStart(suit);
					if (suitStart / 13 != src.No / 13)
					{
						continue;
					}
					int leftRank = suitStart % 13;
					int rightRank = (leftRank + suit.Count - 1) % 13;
					rightRank = ((rightRank != 0) ? (rightRank - 1) : 12);
					int no = src.No % 13;
					if (no <= leftRank + 1 || no >= rightRank)
					{
						continue;
					}
					int index = no - leftRank;
					List<Card> left = new List<Card>();
					for (int j = 0; j <= index; j++)
					{
						left.Add(suit[j]);
					}
					List<Card> right = new List<Card> { src };
					for (int i = index + 1; i < suit.Count; i++)
					{
						right.Add(suit[i]);
					}
					_discard.Remove(src);
					_suit.Remove(suit);
					_suit.Add(left);
					_suit.Add(right);
					return true;
				}
			}
			return false;
		}

		private bool _TryBuildRankFromSuits()
		{
			foreach (List<Card> rank in _possibleRank)
			{
				int rankBits = 0;
				foreach (Card s3 in rank)
				{
					rankBits |= 1 << _Suit(s3);
				}
				int rankNum = _Rank(rank[0]);
				foreach (List<Card> suit in _suit)
				{
					if (suit.Count <= 3)
					{
						continue;
					}
					int suitStart = _FindSuitStart(suit);
					int color = suitStart / 13;
					int leftRank = suitStart % 13;
					if (rankNum == leftRank && (rankBits & (1 << color)) == 0)
					{
						rank.Add(suit[0]);
						suit.RemoveAt(0);
						_possibleRank.Remove(rank);
						_rank.Add(rank);
						rank.Sort((Card s1, Card s2) => s1.No - s2.No);
						return true;
					}
					int rightRank = (leftRank + suit.Count - 1) % 13;
					if (rankNum != rightRank || (rankBits & (1 << color)) != 0)
					{
						continue;
					}
					rank.Add(suit[suit.Count - 1]);
					suit.RemoveAt(suit.Count - 1);
					_possibleRank.Remove(rank);
					_rank.Add(rank);
					rank.Sort((Card s1, Card s2) => s1.No - s2.No);
					return true;
				}
			}
			return false;
		}
	}
}
