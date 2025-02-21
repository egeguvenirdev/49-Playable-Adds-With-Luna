using System.Collections.Generic;
using System.Linq;
using DG.Tweening;
using GinrummyExtra;
using UnityEngine;

[RequireComponent(typeof(HandSlotArc))]
public class HandController : MonoBehaviour
{
	[SerializeField]
	private int sortingOrderMultiplier = 80;

	private HandSlotArc _handSlotArc;

	[SerializeField]
	private Transform slotPrefab;

	[SerializeField]
	private List<Transform> slotsPool;

	private List<Card> _cardList = new List<Card>();

	private List<Transform> _slotList = new List<Transform>();

	[SerializeField]
	private float duration;

	[SerializeField]
	private Ease ease;

	private List<Card> _cachedSortedHand = new List<Card>();

	private HandEvaluator.Result _lastHandEvaluateResult = null;

	private List<Card> _lastHandEvaluateList = new List<Card>();

	private int _lastDeadWoodScore = int.MaxValue;

	private int _lastMeldHandsCount = 0;

	public HandSlotArc handSlotArc => _handSlotArc;

	public int SlotCount => _slotList.Count;

	public int CardCount => _cardList.Count;

	public List<int> HandCardNoList { get; private set; } = new List<int>();


	public void Init()
	{
		_handSlotArc = GetComponent<HandSlotArc>();
		_handSlotArc.CacheSlots();
		for (int i = 0; i < 10; i++)
		{
			_slotList.Add(slotsPool[i]);
		}
		UpdateSlots(true);
	}

	public void CheckHandChange()
	{
		List<int> handCardNoList = new List<int>(_cardList.Select((Card c) => c.No));
		if (HandCardNoList.Count <= 0 || !handCardNoList.SequenceEqual(HandCardNoList))
		{
			HandCardNoList = new List<int>(handCardNoList);
			int[] result = GetDeadWoodScore();
		}
	}

	private int[] GetDeadWoodScore()
	{
		HandEvaluator.Result handEvaluator = SplitIntoMeldsOptimization(_cardList);
		int deadWood = handEvaluator.deadWoodScore;
		int biggest = handEvaluator.biggestDeadWoodScore;
		_lastDeadWoodScore = deadWood;
		if (handEvaluator.melds.Count > _lastMeldHandsCount)
		{
		}
		_lastMeldHandsCount = handEvaluator.melds.Count;
		return new int[2] { deadWood, biggest };
	}

	public void DealForce(List<int> cardNoList)
	{
		for (int i = 0; i < 10; i++)
		{
			Card card = CardLayer.Instance.cardPool.GetCard();
			card.transform.SetParent(_slotList[i]);
			card.transform.localPosition = Vector3.zero;
			card.transform.localRotation = Quaternion.Euler(Vector3.zero);
			card.transform.localScale = Vector3.one;
			card.SortingOrder = sortingOrderMultiplier + i;
			card.Source = CardSource.Hand;
			card.No = cardNoList[i];
			card.CanCollide = true;
			_cardList.Add(card);
			_cachedSortedHand.Add(card);
		}
		UpdateCardHighlights();
	}

	public void SetCardSortingOrder()
	{
		for (int i = 0; i < CardCount; i++)
		{
			_cardList[i].SortingOrder = i + sortingOrderMultiplier;
		}
	}

	public void UpdateSlots(bool force = false)
	{
		for (int i = 0; i < SlotCount; i++)
		{
			Transform slot = _slotList[i];
			if ((object)slot != null && (object)_handSlotArc != null)
			{
				Vector3 targetPosition = _handSlotArc.GetSlotPosition(SlotCount, i);
				Quaternion targetRotation = Quaternion.Euler(new Vector3(slot.localEulerAngles.x, slot.localEulerAngles.y, _handSlotArc.GetSlotRotationZ(SlotCount, SlotCount - 1 - i)));
				if (force)
				{
					slot.localPosition = targetPosition;
					slot.localRotation = targetRotation;
				}
				else
				{
					CardPile.UpdatePosition(slot, targetPosition, targetRotation, null, 0.2f, Ease.Linear, false, false, false, true);
				}
			}
		}
	}

	private Transform GetSlot()
	{
		Transform emptySlot = null;
		for (int i = 0; i < slotsPool.Count; i++)
		{
			if (slotsPool[i].transform.childCount == 0)
			{
				emptySlot = slotsPool[i];
				break;
			}
		}
		if (emptySlot == null)
		{
			emptySlot = Object.Instantiate(slotPrefab, base.transform);
			slotsPool.Add(emptySlot);
		}
		return emptySlot;
	}

	public void Add(Card card, int index = -1, bool updateStatus = true, bool force = false)
	{
		if (!_cardList.Contains(card))
		{
			Transform slot = GetSlot();
			if (index == -1 || index == CardCount - 1)
			{
				_cardList.Add(card);
				if (!_slotList.Contains(slot))
				{
					_slotList.Add(slot);
				}
			}
			else
			{
				_cardList.Insert(index, card);
				if (!_slotList.Contains(slot))
				{
					_slotList.Insert(index, slot);
				}
			}
		}
		if (updateStatus)
		{
			UpdateSlots(force);
			SetCardSortingOrder();
			UpdateCardHighlights();
			MoveToZero(card, force);
		}
	}

	private void MoveToZero(Card card, bool force = false)
	{
		card.Source = CardSource.Hand;
		if (_cardList.Contains(card))
		{
			int index = _cardList.IndexOf(card);
			if (index >= 0 && index < SlotCount)
			{
				card.transform.SetParent(_slotList[index]);
				Transform target = card.transform;
				float num = duration;
				Ease ease = this.ease;
				bool force2 = force;
				CardPile.UpdatePosition(target, null, null, null, num, ease, force2);
			}
		}
	}

	public int GetIndexFromWorldPosition(Vector3 mouseWorldPosition)
	{
		float localPositionX = base.transform.InverseTransformPoint(mouseWorldPosition).x;
		int index = -1;
		int handCount = CardCount;
		for (int i = handCount; i >= 0; i--)
		{
			float slotPosX = _handSlotArc.GetSlotPosition(handCount, i).x;
			if (localPositionX >= slotPosX - 1f && localPositionX < slotPosX + 1f)
			{
				index = i;
				break;
			}
		}
		if (index == -1)
		{
			index = ((!(localPositionX <= _handSlotArc.GetSlotPosition(handCount, 0).x)) ? (handCount - 1) : 0);
		}
		return index;
	}

	public void RemoveCard(Card card, bool returnPool = true)
	{
		if (_cardList.Contains(card))
		{
			int index = _cardList.IndexOf(card);
			if (index < SlotCount)
			{
				Transform slot = _slotList[index];
				_slotList.Remove(slot);
			}
			_cardList.Remove(card);
			if (returnPool)
			{
				CardLayer.Instance.cardPool.ReturnCard(card);
			}
		}
	}

	public bool IsSwap(Card card, int index = -1)
	{
		return _cardList.Contains(card) && _cardList.IndexOf(card) != index && index >= 0 && index < CardCount;
	}

	public void Swap(Card card, int targetIndex)
	{
		if (CardCount == SlotCount)
		{
			int initialIndex = _cardList.IndexOf(card);
			targetIndex = ((targetIndex > initialIndex) ? (initialIndex + 1) : (initialIndex - 1));
			_cardList.Swap(initialIndex, targetIndex);
			_slotList.Swap(initialIndex, targetIndex);
			UpdateSlots();
			SetCardSortingOrder();
		}
	}

	public bool IsCardInHandList(Card card)
	{
		return _cardList.Contains(card);
	}

	public void SortHand()
	{
		int firstDeadWoodScore = _lastDeadWoodScore;
		List<Card> currentCards = (_cardList.Any((Card card) => card.No == 52) ? SorterJoker.Sort(_cardList) : SorterDefault.Sort(_cardList));
		HandEvaluator.Result currentHandResult = SplitIntoMeldsOptimization(currentCards);
		if (currentHandResult.deadWoodScore < firstDeadWoodScore)
		{
			_cardList = currentCards;
		}
		else
		{
			string firstHand = _cardList.Aggregate(string.Empty, (string current, Card c) => current + c.No);
			HandEvaluator.Result handResult = SplitIntoMeldsOptimization(_cardList);
			List<Card> matchingDeadWoods = _cardList.Where((Card card) => handResult.deadWoodCards.Any((Card dw) => dw.No == card.No)).ToList();
			matchingDeadWoods.Sort(delegate(Card c1, Card c2)
			{
				int num = c1.No % 13 * 100 + c1.No / 13;
				int num2 = c2.No % 13 * 100 + c2.No / 13;
				return num - num2;
			});
			foreach (Card card2 in matchingDeadWoods)
			{
				_cardList.Remove(card2);
			}
			_cardList.AddRange(matchingDeadWoods);
			string lastHand = _cardList.Aggregate(string.Empty, (string current, Card c) => current + c.No);
			if (firstHand.Equals(lastHand))
			{
			}
		}
		_slotList.Clear();
		foreach (Card t in _cardList)
		{
			_slotList.Add(t.transform.parent);
		}
		UpdateSlots();
		_cachedSortedHand = new List<Card>(_cardList);
		UpdateCardHighlights();
		SetCardSortingOrder();
	}

	private HandEvaluator.Result SplitIntoMeldsOptimization(List<Card> cards)
	{
		if (_lastHandEvaluateResult != null && _lastHandEvaluateList.Count > 0 && _lastHandEvaluateList.SequenceEqual(cards))
		{
			return _lastHandEvaluateResult;
		}
		_lastHandEvaluateList = new List<Card>(cards);
		return HandEvaluator.SplitIntoMelds(_lastHandEvaluateList);
	}

	public void UpdateCardHighlights(Card ignoredCard = null)
	{
		HandEvaluator.Result handResult = SplitIntoMeldsOptimization(_cardList);
		List<List<Card>> melds = handResult.melds;
		List<Card> deadWoods2 = handResult.deadWoodCards;
		if (ignoredCard != null && !deadWoods2.Contains(ignoredCard))
		{
			foreach (List<Card> currentMeld in melds)
			{
				int index = currentMeld.FindIndex((Card c) => c.Equals(ignoredCard));
				if (index == -1)
				{
					continue;
				}
				List<Card> firstPart = currentMeld.GetRange(0, index);
				List<Card> secondPart = currentMeld.GetRange(index + 1, currentMeld.Count - index - 1);
				if (firstPart.Count < 3)
				{
					MoveCardsToDeadWoods(firstPart, currentMeld, deadWoods2);
				}
				if (secondPart.Count < 3)
				{
					MoveCardsToDeadWoods(secondPart, currentMeld, deadWoods2);
				}
				currentMeld.Remove(ignoredCard);
				deadWoods2.Add(ignoredCard);
				if (currentMeld.Count < 3)
				{
					melds.Remove(currentMeld);
				}
				break;
			}
		}
		for (int i = 0; i < melds.Count; i++)
		{
			foreach (Card card in melds[i])
			{
				card.HighlightNo = i;
			}
		}
		foreach (Card card2 in deadWoods2)
		{
			card2.HighlightNo = -1;
		}
		void MoveCardsToDeadWoods(List<Card> cardsToMove, List<Card> sourceMeld, List<Card> deadWoods)
		{
			foreach (Card card3 in cardsToMove)
			{
				sourceMeld.Remove(card3);
				deadWoods.Add(card3);
			}
		}
	}
}
