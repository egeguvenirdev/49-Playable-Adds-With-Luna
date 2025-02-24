using System.Collections.Generic;
using System.Linq;
using DG.Tweening;
using GinrummyExtra;
using UnityEngine;
[RequireComponent(typeof(HandSlotArc))]
public class HandController : MonoBehaviour
{
    [SerializeField] private int sortingOrderMultiplier = 80;
    private HandSlotArc _handSlotArc;
    public HandSlotArc handSlotArc => _handSlotArc;
    [SerializeField] private Transform slotPrefab;
    [SerializeField] private List<Transform> slotsPool;
    private List<Card> _cardList = new();
    private List<Transform> _slotList = new();
    public int SlotCount => _slotList.Count;
    public int CardCount => _cardList.Count;
    [SerializeField] private float duration;
    [SerializeField] private Ease ease;
    private List<Card> _cachedSortedHand = new();
    public List<int> HandCardNoList { get; private set; } = new();
    public void Init()
    {
        _handSlotArc = GetComponent<HandSlotArc>();
        _handSlotArc.CacheSlots();
        for (var i = 0; i < 10; i++)
        {
            _slotList.Add(slotsPool[i]);
        }
        UpdateSlots(force:true);
    }
    public void CheckHandChange()
    {
        var handCardNoList = new List<int>(_cardList.Select(c => c.No));
        if (HandCardNoList.Count > 0 && handCardNoList.SequenceEqual(HandCardNoList))
            return;
        HandCardNoList = new List<int>(handCardNoList);
        var result = GetDeadWoodScore();
       // cardLayer.OnHandChanged?.Invoke(HandCardNoList);
       CardLayer.Instance.OnHandDeadWoodChanged(result[0]-result[1]);
    }
    private int[] GetDeadWoodScore()
    {
        var handEvaluator = SplitIntoMeldsOptimization(_cardList);
        var deadWood = handEvaluator.deadWoodScore;
        var biggest = handEvaluator.biggestDeadWoodScore;
        _lastDeadWoodScore = deadWood;
        if (handEvaluator.melds.Count > _lastMeldHandsCount)
        {
           // AudioManager.PlaySoundEffect(AudioManager.Sounds().SetPer);
        }
        _lastMeldHandsCount = handEvaluator.melds.Count;
        //CardLayer.OnDeadWoodChanged?.Invoke(deadWood);
        return new []{deadWood, biggest};
    }
    public void DealForce(List<int> cardNoList)
    {
        for (var i = 0; i < 10; i++)
        {
            var card = CardLayer.Instance.cardPool.GetCard();
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
        for (var i = 0; i < CardCount; i++)
        {
            _cardList[i].SortingOrder = i + sortingOrderMultiplier;
        }
    }
    public void UpdateSlots(bool force = false)
    {
        for (var i = 0; i < SlotCount; i++)
        {
            var slot = _slotList[i];
            if (slot is null || _handSlotArc is null) continue;
            var targetPosition = _handSlotArc.GetSlotPosition(SlotCount, i);
            var targetRotation = Quaternion.Euler(new Vector3(slot.localEulerAngles.x,
                slot.localEulerAngles.y, _handSlotArc.GetSlotRotationZ(SlotCount, SlotCount - 1 - i)));
            if (force)
            {
                slot.localPosition = targetPosition;
                slot.localRotation = targetRotation;
            }
            else
            {
                CardPile.UpdatePosition(slot, duration: .2f, ignoreScale: true, targetPosition:targetPosition, targetRotation:targetRotation);
            }
        }
    }
    private Transform GetSlot()
    {
        Transform emptySlot = null;
        for (var i = 0; i < slotsPool.Count; i++)
        {
            if (slotsPool[i].transform.childCount == 0)
            {
                emptySlot = slotsPool[i];
                break;
            }
        }
        if (emptySlot == null)
        {
            emptySlot =  Instantiate(slotPrefab, transform);
            slotsPool.Add(emptySlot);
        }
        return emptySlot;
    }
    public void Add(Card card,int index = -1, bool updateStatus = true, bool force = false)
    {
        if (!_cardList.Contains(card))
        {
            var slot = GetSlot();
            if (index == -1 || index > CardCount - 1)
            {
                _cardList.Add(card);
                if (!_slotList.Contains(slot))
                    _slotList.Add(slot);
            }
            else
            {
                _cardList.Insert(index,card);
                if (!_slotList.Contains(slot))
                    _slotList.Insert(index,slot);
            } 
        }
        if (!updateStatus) return;
        UpdateSlots(force:force);
        SetCardSortingOrder();
        UpdateCardHighlights();
        MoveToZero(card, force);
    }
    private void MoveToZero(Card card, bool force = false)
    {
        card.Source = CardSource.Hand;
        if (!_cardList.Contains(card)) return;
        var index = _cardList.IndexOf(card);
        if (index < 0 || index >= SlotCount) return;
        card.transform.SetParent(_slotList[index]);
        CardPile.UpdatePosition(card.transform, duration: duration, ease: ease, force: force);
    }
    public int GetIndexFromWorldPosition(Vector3 mouseWorldPosition)
    {
        var localPositionX = transform.InverseTransformPoint(mouseWorldPosition).x;
        var index = -1;
        const float cardHalfWidth = 1f;
        var handCount = CardCount;
        for (var i = handCount; i >= 0; i--)
        {
            var slotPosX = _handSlotArc.GetSlotPosition(handCount,i).x;
            if (!(localPositionX >= slotPosX - cardHalfWidth) ||
                !(localPositionX < slotPosX + cardHalfWidth)) continue;
            index = i;
            break;
        }
        if (index == -1)
        {
            index = localPositionX <= _handSlotArc.GetSlotPosition(handCount, 0).x ? 0 : handCount - 1;
        }
        return index;
    }
    public void RemoveCard(Card card, bool returnPool = true)
    {
        if (!_cardList.Contains(card)) return;
        var index = _cardList.IndexOf(card);
        if (index < SlotCount)
        {
            var slot = _slotList[index];
            _slotList.Remove(slot);
        }
        _cardList.Remove(card);
        if (returnPool) CardLayer.Instance.cardPool.ReturnCard(card);
    }
    public bool IsSwap(Card card, int index = -1)
    {
        return _cardList.Contains(card) && _cardList.IndexOf(card) != index && index >= 0 && index < CardCount;
    }
    public void Swap(Card card, int targetIndex)
    {
        if (CardCount != SlotCount) return;
        var initialIndex = _cardList.IndexOf(card);
        targetIndex = targetIndex > initialIndex ? initialIndex + 1 : initialIndex - 1;
        _cardList.Swap(initialIndex,targetIndex);
        _slotList.Swap(initialIndex,targetIndex);
        UpdateSlots();
        SetCardSortingOrder();
    }
    public bool IsCardInHandList(Card card) => _cardList.Contains(card);
    
    private HandEvaluator.Result _lastHandEvaluateResult = null;
    private List<Card> _lastHandEvaluateList = new();
    private int _lastDeadWoodScore = int.MaxValue;
    private int _lastMeldHandsCount = 0;
    public void SortHand()
    {
        // if (_cachedSortedHand.Count > 0 && _cachedSortedHand.SequenceEqual(_cardList))
        // {
        //     Debug.Log("There was no change in the hand after the final sort.");
        //     return;
        // }
        var firstDeadWoodScore = _lastDeadWoodScore;
        var currentCards = _cardList.Any(card => card.No == 52) ? SorterJoker.Sort(_cardList) : SorterDefault.Sort(_cardList);
        var currentHandResult = SplitIntoMeldsOptimization(currentCards);
        if (currentHandResult.deadWoodScore < firstDeadWoodScore) 
        {
           _cardList = currentCards;
        }
        else
        {
            var firstHand = _cardList.Aggregate(string.Empty, (current, c) => current + c.No);
            var handResult =SplitIntoMeldsOptimization(_cardList);
            var matchingDeadWoods = _cardList.Where(card => handResult.deadWoodCards.Any(dw => dw.No == card.No)).ToList();
            matchingDeadWoods.Sort((c1, c2) =>
            {
                var key1 = (c1.No % 13) * 100 + c1.No / 13;
                var key2 = (c2.No % 13) * 100 + c2.No / 13;
                return key1 - key2;
            });
            foreach (var card in matchingDeadWoods)
                _cardList.Remove(card);
            _cardList.AddRange(matchingDeadWoods);
            var lastHand = _cardList.Aggregate(string.Empty, (current, c) => current + c.No);
            if (!firstHand.Equals(lastHand))
            {
                //AudioManager.PlaySoundEffect(AudioManager.Sounds().SetHandWithoutSetPer);
            }
                
        }
        _slotList.Clear();
        foreach (var t in _cardList)
        {
            _slotList.Add(t.transform.parent);
        }
        UpdateSlots();
        _cachedSortedHand = new List<Card>(_cardList);
        UpdateCardHighlights();
        SetCardSortingOrder();
        CheckHandChange();
    }   

    

  
    private HandEvaluator.Result SplitIntoMeldsOptimization(List<Card> cards)
    {
        if (_lastHandEvaluateResult != null && _lastHandEvaluateList.Count > 0 && _lastHandEvaluateList.SequenceEqual(cards))
            return _lastHandEvaluateResult;
        _lastHandEvaluateList = new List<Card>(cards);
        return HandEvaluator.SplitIntoMelds(_lastHandEvaluateList);
    }
    
    public void UpdateCardHighlights(Card ignoredCard = null)
    {
        var handResult = SplitIntoMeldsOptimization(_cardList);
        var melds = handResult.melds;
        var deadWoods = handResult.deadWoodCards;
        if (ignoredCard != null && !deadWoods.Contains(ignoredCard))
        {
            foreach (var currentMeld in melds)
            {
                var index = currentMeld.FindIndex(c => c.Equals(ignoredCard));
                if (index == -1) continue;
                var firstPart = currentMeld.GetRange(0, index);
                var secondPart = currentMeld.GetRange(index + 1, currentMeld.Count - index - 1);
                if (firstPart.Count < 3)
                    MoveCardsToDeadWoods(firstPart, currentMeld, deadWoods);
                if (secondPart.Count < 3)
                    MoveCardsToDeadWoods(secondPart, currentMeld, deadWoods);
                currentMeld.Remove(ignoredCard);
                deadWoods.Add(ignoredCard);
                if (currentMeld.Count < 3)
                    melds.Remove(currentMeld);
                break;
            }
        }
        for (var i = 0; i < melds.Count; i++)
            foreach (var card in melds[i])
                card.HighlightNo = i;
        foreach (var card in deadWoods)
            card.HighlightNo = -1;
        return;
        static void MoveCardsToDeadWoods(List<Card> cardsToMove, List<Card> sourceMeld, List<Card> deadWoods)
        {
            foreach (var card in cardsToMove)
            {
                sourceMeld.Remove(card);
                deadWoods.Add(card);
            }
        }
    }
}
