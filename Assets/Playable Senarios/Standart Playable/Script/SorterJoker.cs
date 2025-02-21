using System;
using System.Collections.Generic;
using System.Linq;


namespace GinrummyExtra
{
    //jokerli sort
    public class SorterJoker
    {
        private readonly List<List<Card>> _suit = new();
        private readonly List<List<Card>> _rank = new();
        private readonly List<List<Card>> _possibleSuit = new();
        private readonly List<List<Card>> _possibleRank = new();

        private readonly List<Card> _jokers = new();
        private List<Card> _discard = new();

        private List<Card> _result;
        private int _score;

        private bool _reverseSort;
        private bool _rankReverseSort;
        private bool _appendJokerRight;
        private bool _rankFirst;
        private int _rankOrder;

        private static int _Rank(Card card) => card.No % 13;
        private static int _Suit(Card card) => card.No / 13;
        private int _CardNoWithRankOrder(Card s) => RankOrders[_rankOrder, _Suit(s)] * 13 + _Rank(s);

        private int _SuitCompare(Card s1, Card s2) => _reverseSort
            ? _CardNoWithRankOrder(s2) - _CardNoWithRankOrder(s1)
            : _CardNoWithRankOrder(s1) - _CardNoWithRankOrder(s2);

        private int _RankCompare(Card s1, Card s2) => _rankReverseSort
            ? _Rank(s2) * 1000 + RankOrders[_rankOrder, _Suit(s2)] -
              (_Rank(s1) * 1000 + RankOrders[_rankOrder, _Suit(s1)])
            : _Rank(s1) * 1000 + RankOrders[_rankOrder, _Suit(s1)] -
              (_Rank(s2) * 1000 + RankOrders[_rankOrder, _Suit(s2)]);

        private static readonly int[,] RankOrders =
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

        public static List<Card> Sort(List<Card> cards)
        {
            SorterJoker best = null;
            for (var sortType = 0; sortType < 2; sortType++)
            {
                for (var appendSide = 0; appendSide < 2; appendSide++)
                {
                    for (var rankFirst = 0; rankFirst < 2; rankFirst++)
                    {
                        for (var rankSortType = 0; rankSortType < 2; rankSortType++)
                        {
                            for (var rankOrder = 0; rankOrder < 4; rankOrder++)
                            {
                                for (var collectJoker = 0; collectJoker < 2; collectJoker++)
                                {
                                    var sorter = new SorterJoker
                                    {
                                        _reverseSort = sortType == 1,
                                        _rankReverseSort = rankSortType == 1,
                                        _rankOrder = rankOrder, //rankType,
                                        _appendJokerRight = appendSide == 1,
                                        _rankFirst = rankFirst == 1
                                    };
                                    if (!sorter._Sort(cards, collectJoker == 0)) continue;
                                    if (best == null || best._score > sorter._score) best = sorter;
                                }
                            }
                        }
                    }
                }
            }

            return best != null ? best._result : cards;
        }

        private int _SuitScore(List<Card> cards)
        {
            if (cards.Count <= 2 || cards.Contains(null))
            {
                return 0;
            }

            var no = _FindSuitStart(cards);
            var rank = (no % 13);
            var score = 0;
            foreach (var card in cards)
            {
                rank++;
                if (rank > 10) rank = 10;
                if (card.No == 52)
                    continue;
                score += rank;
            }

            return -10000 - score;
        }

        private int _RankScore(List<Card> cards)
        {
            if (cards.Count <= 2 || cards.Contains(null))
            {
                return 0;
            }

            var jokerCount = 0;
            foreach (var card in cards)
            {
                if (card.No == 52)
                    jokerCount++;
            }

            foreach (var card in cards)
            {
                var no = card.No;
                if (no != 52)
                {
                    var rank = Math.Min((no % 13) + 1, 10);
                    return -10000 - (rank * (cards.Count - jokerCount));
                }
            }

            return 0;
        }

        private void _DoCollect(List<Card> cards, Func<Card, Card, int> sortFunc, Action<List<Card>> collectFunc)
        {
            cards.AddRange(_discard);
            cards.Sort((s1, s2) => sortFunc(s1, s2));
            _DiscardSame(cards);
            collectFunc(cards);
        }

        private void _CollectWithJoker(List<Card> cards)
        {
            while (_jokers.Count > 0)
            {
                var original = new List<Card>();
                original.AddRange(_discard);
                cards.AddRange(_discard);
                _DiscardSame(cards);

                var scoreList = new int[3];
                scoreList[0] = _CollectSuitWithJoker3Cards(cards, false);
                cards.AddRange(original);
                scoreList[1] = _CollectSuitWithJoker2Cards(cards, false);
                cards.AddRange(original);
                scoreList[2] = _CollectRankWithJoker(cards, false);
                cards.AddRange(original);
                if (scoreList.All(o => o == 0))
                    break;
                var minIndex = scoreList.ToList().IndexOf(scoreList.Min());

                switch (minIndex)
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
            var cards = new List<Card>();
            cards.AddRange(original);

            //remove jokers
            cards.Sort((s1, s2) => s1.No - s2.No);
            while (cards.Count > 0 && cards[^1].No == 52)
            {
                _jokers.Add(cards[^1]);
                cards.RemoveAt(cards.Count - 1);
            }

            _discard.AddRange(cards);
            cards.Clear();

            if (!_rankFirst)
            {
                for (var i = 0; i < 2; i++) _DoCollect(cards, _SuitCompare, _CollectSuit);
                for (var i = 0; i < 2; i++) _DoCollect(cards, _RankCompare, list => _CollectRank(list));

                if (collectJoker)
                    _CollectWithJoker(cards);
                while (_ExtendSuits(_discard, _suit))
                {
                }

                while (_ExtendRanks(_discard, _rank))
                {
                }
            }
            else
            {
                for (var i = 0; i < 2; i++) _DoCollect(cards, _RankCompare, (list) => _CollectRank(list));
                for (var i = 0; i < 2; i++) _DoCollect(cards, _SuitCompare, _CollectSuit);

                if (collectJoker)
                    _CollectWithJoker(cards);
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
            //_discard.Sort((s1, s2) => (_Rank(s1) * 1000 + _Suit(s1)) - (_Rank(s2) * 1000 + _Suit(s2)));
            _score = 0;
            _suit.RemoveAll(item => item == null);
            _rank.RemoveAll(item => item == null);
            _suit.ForEach(list => _score += _SuitScore(list));
            _rank.ForEach(list => _score += _RankScore(list));

            _result = new List<Card>();
            _suit.ForEach(list => _result.AddRange(list));
            _rank.ForEach(list => _result.AddRange(list));
            _possibleSuit.ForEach(list => _discard.AddRange(list));
            _possibleRank.ForEach(list => _discard.AddRange(list));
            _discard.RemoveAll(item => item == null);
            //groups.Sort((g1, g2) => ((!g2.Contains(null) && g2.Count > 2 ? 1000 : 0) + g2.Count) - ((!g1.Contains(null) && g1.Count > 2 ? 1000 : 0) + g1.Count));

            foreach (var card in _discard)
            {
                if (card.No != 52) continue;
                _score += 10000; //bosta joker istemiyoruz
                break;
            }

            _discard = _discard.OrderBy(c => c.No % 13).ToList();
            _result.AddRange(_discard);
            return true;
        }

        private void _DiscardSame(List<Card> cards)
        {
            _discard.Clear();
            var p = 0;
            while (p < cards.Count - 1)
            {
                if (cards[p].No == cards[p + 1].No)
                {
                    _discard.Add(cards[p]);
                    cards.RemoveAt(p);
                }

                p++;
            }
        }

        /// <summary>
        /// FEMALE Per olusturur
        /// </summary>
        /// <param name="cards"></param>
        private void _CollectSuit(List<Card> cards)
        {
            while (cards.Count >= 3)
            {
                if (_Suit(cards[0]) == _Suit(cards[1]) && _Suit(cards[0]) == _Suit(cards[2]))
                {
                    var r0 = _Rank(cards[0]);
                    var r1 = _Rank(cards[1]);
                    var r2 = _Rank(cards[2]);
                    if (Math.Abs(r1 - r0) == 1 && Math.Abs(r2 - r1) == 1)
                    {
                        var per = new List<Card>();
                        for (var i = 0; i < 3; i++)
                        {
                            per.Add(cards[0]);
                            cards.RemoveAt(0);
                        }

                        if (_reverseSort) per.Reverse();
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
                    var per = new List<Card>
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
                    _discard.Add(cards[0]);
                cards.RemoveAt(0);
            }

            if (collect)
                _discard.AddRange(cards);
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
                    var rank0 = _Rank(cards[0]);
                    var rank1 = _Rank(cards[1]);
                    var rank2 = _Rank(cards[2]);
                    var distance = Math.Abs(rank0 - rank1);
                    var distance2 = Math.Abs(rank1 - rank2);
                    if (distance == 1 && distance2 == 2)
                    {
                        var per = new List<Card>
                        {
                            cards[0],
                            cards[1],
                            _jokers[0],
                            cards[2]
                        };
                        if (!collect)
                        {
                            cards.Clear();
                            return _SuitScore(per);
                        }

                        _jokers.RemoveAt(0);
                        cards.RemoveRange(0, 3);
                        if (_reverseSort) per.Reverse();
                        _suit.Add(per);
                        break;
                    }

                    if (distance == 2 && distance2 == 1)
                    {
                        var per = new List<Card>
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
                        if (_reverseSort) per.Reverse();
                        _suit.Add(per);
                        break;
                    }
                }

                if (collect)
                    _discard.Add(cards[0]);
                cards.RemoveAt(0);
            }

            if (collect)
                _discard.AddRange(cards);
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
                    var rank0 = _Rank(cards[0]);
                    var rank1 = _Rank(cards[1]);
                    var distance = Math.Abs(rank0 - rank1);
                    if (distance == 1)
                    {
                        var invalid = (rank1 > rank0 && rank1 == 12 && _appendJokerRight) ||
                                      (rank0 > rank1 && rank0 == 12 && !_appendJokerRight) ||
                                      (!_appendJokerRight && rank0 == 0) || (_appendJokerRight && rank1 == 0);
                        if (!invalid)
                        {
                            var per = new List<Card>();
                            if (!_appendJokerRight) per.Add(_jokers[0]);
                            per.Add(cards[0]);
                            per.Add(cards[1]);
                            if (_appendJokerRight) per.Add(_jokers[0]);
                            if (!collect)
                            {
                                cards.Clear();
                                return _SuitScore(per);
                            }

                            _jokers.RemoveAt(0);
                            cards.RemoveRange(0, 2);
                            if (_reverseSort) per.Reverse();
                            _suit.Add(per);
                            break;
                        }
                    }
                    else if (distance == 2)
                    {
                        var per = new List<Card>
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
                        if (_reverseSort) per.Reverse();
                        _suit.Add(per);
                        break;
                    }
                }

                if (collect)
                    _discard.Add(cards[0]);
                cards.RemoveAt(0);
            }

            if (collect)
                _discard.AddRange(cards);
            cards.Clear();
            return 0;
        }

        /// <summary>
        /// 56.7 seklinde arada bir bosluk olan perleri bulur
        /// </summary>
        /// <param name="cards"></param>
        private void _CollectPossibleSuit(List<Card> cards)
        {
            while (cards.Count >= 3)
            {
                if (_Suit(cards[0]) == _Suit(cards[1]) && _Suit(cards[0]) == _Suit(cards[2]))
                {
                    var r0 = _Rank(cards[0]);
                    var r1 = _Rank(cards[1]);
                    var r2 = _Rank(cards[2]);

                    var distance0 = Math.Abs(r1 - r0);
                    var distance1 = Math.Abs(r2 - r1);
                    switch (distance0, distance1)
                    {
                        case (1, 2):
                        {
                            var per = new List<Card>
                            {
                                cards[0],
                                cards[1],
                                null,
                                cards[2]
                            };
                            if (_reverseSort) per.Reverse();
                            _possibleSuit.Add(per);
                            cards.RemoveRange(0, 3);
                            continue;
                        }
                        case (2, 1):
                        {
                            var per = new List<Card>
                            {
                                cards[0],
                                null,
                                cards[1],
                                cards[2]
                            };
                            if (_reverseSort) per.Reverse();
                            _possibleSuit.Add(per);
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

        /// <summary>
        /// 4-5 gibi 2 ardisik per bulur
        /// </summary>
        /// <param name="cards"></param>
        private void _CollectSuit2(List<Card> cards)
        {
            while (cards.Count >= 2)
            {
                var delta = Math.Abs(_Rank(cards[1]) - _Rank(cards[0]));
                if (_Suit(cards[0]) == _Suit(cards[1]) && delta == 1)
                {
                    var per = new List<Card>
                    {
                        cards[0],
                        cards[1]
                    };
                    if (_reverseSort) per.Reverse();

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
                var p = 0;
                while (p < required && p < cards.Count && _Rank(cards[p]) == _Rank(cards[0])) p++;
                if (p >= required)
                {
                    var per = new List<Card>();
                    for (var i = 0; i < p; i++)
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

        /// <summary>
        /// 55 gibi 2 ardisik erkek per bulur
        /// </summary>
        /// <param name="cards"></param>
        private void _CollectRank2(List<Card> cards)
        {
            while (cards.Count >= 2)
            {
                if (_Suit(cards[0]) != _Suit(cards[1]) && _Rank(cards[1]) == _Rank(cards[0]))
                {
                    var per = new List<Card>
                    {
                        cards[0],
                        cards[1]
                    };
                    if (_reverseSort) per.Reverse();
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
            var countBefore = cards.Count;
            var p = 0;
            while (p < cards.Count)
            {
                var src = cards[p];
                var suit = _Suit(src);
                var rank = _Rank(src);
                var foundOnLeft = false;
                var found = target.Find(per =>
                {
                    var check = per[0].No == 52 ? per[1] : per[0];
                    if (_Suit(check) == suit)
                    {
                        var leftRank = 0;
                        for (var i = 0; i < per.Count; i++)
                        {
                            if (per[i].No == 52) continue;
                            leftRank = _Rank(per[i]) - i;
                            break;
                        }

                        if (leftRank - rank == 1)
                        {
                            foundOnLeft = true;
                            return true;
                        }

                        var rightRank = leftRank + per.Count - 1;
                        if (rightRank < 13 && rank - rightRank == 1) return true;
                    }

                    return false;
                });

                if (found != null)
                {
                    if (foundOnLeft) found.Insert(0, src);
                    else found.Add(src);
                    cards.RemoveAt(p);
                    continue;
                }

                p++;
            }

            return countBefore != cards.Count;
        }

        /// <summary>
        /// Disi perlere joker ve bir tas olacak sekilde eklemeye calisir.
        /// 4-5-6 perini 4-5-6-joker-8 veya 2-joker-4-5-6 gibi...
        /// </summary>
        /// <param name="cards"></param>
        /// <param name="target"></param>
        /// <returns></returns>
        private bool _ExtendSuitsWithJoker(List<Card> cards, List<List<Card>> target)
        {
            var countBefore = cards.Count;
            var p = 0;
            while (_jokers.Count > 0 && p < cards.Count)
            {
                var src = cards[p];
                var suit = _Suit(src);
                var rank = _Rank(src);
                var foundOnLeft = false;
                var found = target.Find(per =>
                {
                    var check = per[0].No == 52 ? per[1] : per[0];
                    if (_Suit(check) != suit) return false;
                    var leftRank = 0;
                    for (var i = 0; i < per.Count; i++)
                    {
                        if (per[i].No == 52) continue;
                        leftRank = _Rank(per[i]) - i;
                        break;
                    }

                    if (leftRank - rank == 2)
                    {
                        foundOnLeft = true;
                        return true;
                    }

                    var rightRank = leftRank + per.Count - 1;
                    return rightRank < 13 && rank - rightRank == 2 /*|| (rightRank == 12 && rank == 0))*/;
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
                    continue;
                }

                p++;
            }

            return countBefore != cards.Count;
        }

        /// <summary>
        /// Erkek perlere eklenebilecek taslari ekler
        /// </summary>
        /// <param name="cards"></param>
        /// <param name="target"></param>
        /// <returns></returns>
        private bool _ExtendRanks(List<Card> cards, List<List<Card>> target)
        {
            var countBefore = cards.Count;
            var p = 0;
            while (p < cards.Count)
            {
                var src = cards[p];
                var suit = _Suit(src);
                var rank = _Rank(src);
                var found = target.Find(per =>
                {
                    if (per.Count >= 4) return false;
                    var used = 0;
                    var perRank = -1;
                    foreach (var card in per)
                    {
                        if (card.No != 52)
                        {
                            used |= 1 << _Suit(card);
                            perRank = _Rank(card);
                        }
                    }

                    return rank == perRank && (used & (1 << suit)) == 0;
                });

                if (found != null)
                {
                    found.Add(src);
                    cards.RemoveAt(p);
                    continue;
                }

                p++;
            }

            return countBefore != cards.Count;
        }

        private int _FindSuitStart(List<Card> cards)
        {
            for (var i = 0; i < cards.Count; i++)
            {
                if (cards[i].No != 52)
                {
                    return _Rank(cards[i]) - i + _Suit(cards[i]) * 13;
                }
            }

            return -1; //bu olmamasi lazim...
        }

        /// <summary>
        /// 1-2-3 4-5-6 seklinde olusmus perler var ise birlestirir
        /// </summary>
        private bool _MergeSuits()
        {
            for (var i = 0; i < _suit.Count; i++)
            {
                var suit = _suit[i];
                var srcLeft = _FindSuitStart(suit);
                var srcLeftRank = srcLeft % 13;
                var srcRightRank = srcLeftRank + suit.Count - 1;
                var addToLeft = false;
                if (srcRightRank >= 12) continue;
                var srcSuit = srcLeft / 13;
                var found = _suit.Find(per =>
                {
                    if (suit == per) return false;
                    var left = _FindSuitStart(per);
                    if (left / 13 != srcSuit) return false;
                    var leftRank = left % 13;
                    if (leftRank - srcRightRank == 1) return true;
                    var rightRank = leftRank + per.Count - 1;
                    if (srcLeftRank - rightRank != 1 || rightRank >= 12) return false;
                    addToLeft = true;
                    return true;
                });

                if (found == null) continue;
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

            return false;
        }


        private bool _MakeDoubleJokerPer()
        {
            var best = -1;
            var index = -1;
            for (var i = 0; i < _discard.Count; i++)
            {
                if (_Rank(_discard[i]) <= best) continue;
                best = _Rank(_discard[i]);
                index = i;
            }

            if (_jokers.Count < 2 || index <= -1) return false;
            var per = new List<Card> { _jokers[0] };
            _jokers.RemoveAt(0);
            per.Add(_jokers[0]);
            _jokers.RemoveAt(0);
            per.Add(_discard[index]);
            _discard.RemoveAt(index);
            _rank.Add(per);
            return true;
        }

        /// <summary>
        /// Bosta kalan jokerleri en yuksek skor yapacak pere verir
        /// </summary>
        /// <returns></returns>
        private void _UseIdleJoker()
        {
            while (_jokers.Count > 0)
            {
                var bestScore = -1;
                List<Card> bestSet = null;
                var isBestLeft = false;
                foreach (var suit in _suit)
                {
                    if (suit.Count >= 13) continue;
                    var left = _FindSuitStart(suit);
                    var leftRank = left % 13;
                    var rightRank = (leftRank + suit.Count - 1) % 13;
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

                foreach (var rank in _rank)
                {
                    if (rank.Count >= 4) continue;
                    var score = _Rank(rank.Find(card => card.No != 52));
                    if (score <= bestScore) continue;
                    bestSet = rank;
                    bestScore = score;
                    isBestLeft = false;
                }

                if (bestSet != null)
                {
                    if (isBestLeft) bestSet.Insert(0, _jokers[0]);
                    else bestSet.Add(_jokers[0]);
                    _jokers.RemoveAt(0);
                }
                else break;
            }
        }

        /// <summary>
        /// 1-2-3-4-5 per olup elde joker ve 5 kalmasi durumunda 5-5-joker per yapmaya calisir
        /// </summary>
        private bool _TryRankWithJoker()
        {
            if (_discard.Count == 0 || _jokers.Count == 0) return false;

            foreach (var src in _discard)
            {
                foreach (var suit in _suit)
                {
                    if (suit.Count <= 3) continue;
                    var suitStart = _FindSuitStart(suit);
                    if (suitStart / 13 == src.No / 13) continue;
                    var leftRank = suitStart % 13;
                    var rightRank = (leftRank + suit.Count - 1) % 13;
                    Card removed = null;
                    if (leftRank == src.No % 13)
                    {
                        removed = suit[0];
                        suit.RemoveAt(0);
                    }
                    else if (rightRank == src.No % 13)
                    {
                        removed = suit[^1];
                        suit.RemoveAt(suit.Count - 1);
                    }

                    if (removed == null) continue;
                    var list = new List<Card>
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

            return false;
        }

        /// <summary>
        /// Elde kalan sayilari, uzun perleri bolerek eklenebilir mi diye bakar
        /// </summary>
        /// <returns></returns>
        private bool _TryInsertSuit()
        {
            if (_discard.Count == 0) return false;
            foreach (var src in _discard)
            {
                foreach (var suit in _suit)
                {
                    if (suit.Count < 5) continue;
                    var suitStart = _FindSuitStart(suit);
                    if (suitStart / 13 != src.No / 13) continue;
                    var leftRank = suitStart % 13;
                    var rightRank = (leftRank + suit.Count - 1) % 13;
                    if (rightRank == 0) rightRank = 12;
                    else rightRank--;
                    var no = src.No % 13;

                    if (no <= leftRank + 1 || no >= rightRank) continue;
                    var index = no - leftRank;
                    var left = new List<Card>();
                    for (var i = 0; i <= index; i++) left.Add(suit[i]);
                    var right = new List<Card> { src };
                    for (var i = index + 1; i < suit.Count; i++) right.Add(suit[i]);
                    _discard.Remove(src);
                    _suit.Remove(suit);
                    _suit.Add(left);
                    _suit.Add(right);
                    return true;
                }
            }

            return false;
        }

        /// <summary>
        /// Uzun renk perlerden tas eksilterek 2'li perleri 3'lu yapmaya calisir...
        /// </summary>
        /// <returns></returns>
        private bool _TryBuildRankFromSuits()
        {
            foreach (var rank in _possibleRank)
            {
                var rankBits = 0;
                foreach (var s in rank) rankBits |= 1 << _Suit(s);
                var rankNum = _Rank(rank[0]);
                foreach (var suit in _suit)
                {
                    if (suit.Count <= 3) continue;
                    var suitStart = _FindSuitStart(suit);
                    var color = suitStart / 13;
                    var leftRank = suitStart % 13;
                    if (rankNum == leftRank && (rankBits & (1 << color)) == 0)
                    {
                        rank.Add(suit[0]);
                        suit.RemoveAt(0);
                        _possibleRank.Remove(rank);
                        _rank.Add(rank);
                        rank.Sort((s1, s2) => s1.No - s2.No);
                        return true;
                    }

                    var rightRank = (leftRank + suit.Count - 1) % 13;
                    if (rankNum != rightRank || (rankBits & (1 << color)) != 0) continue;
                    {
                        rank.Add(suit[^1]);
                        suit.RemoveAt(suit.Count - 1);
                        _possibleRank.Remove(rank);
                        _rank.Add(rank);
                        rank.Sort((s1, s2) => s1.No - s2.No);
                        return true;
                    }
                }
            }

            return false;
        }
    }
}