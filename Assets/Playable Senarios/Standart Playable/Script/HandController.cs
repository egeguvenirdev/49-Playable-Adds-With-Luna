using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
[RequireComponent(typeof(HandSlotArc))]
public class HandController : MonoBehaviour
{
    [SerializeField] private int sortingOrderMultiplier = 80;
    private HandSlotArc _handSlotArc;
    public HandSlotArc handSlotArc => _handSlotArc;
    [SerializeField] private Transform slotPrefab;
    [SerializeField] private List<Transform> slotsPool;
    public List<Card> _cardList = new();
    public List<Transform> _slotList = new();
    public int SlotCount => _slotList.Count;
    public int CardCount => _cardList.Count;
    [SerializeField] private float duration;
    [SerializeField] private Ease ease;
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
        }
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
            if (index == -1 || index == CardCount - 1)
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
        //UpdateCardHighlights();
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
    
}
