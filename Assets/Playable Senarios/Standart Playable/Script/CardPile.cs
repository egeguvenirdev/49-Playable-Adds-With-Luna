using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public abstract class CardPile : MonoBehaviour
{
    [Header("CardPile Properties")] 
    [SerializeField] protected int sortingOrderMultiplier;
    [SerializeField] public Transform slotPrefab;
    [SerializeField] protected List<Transform> slotPool;
    protected readonly List<Transform> Slots = new();
    protected readonly List<Card> Cards = new();
    
    public int Count => Cards.Count;

    public virtual void Add(Card card) => Add(card, -1);
    
    protected virtual void Add(Card card, int index)
    {
        var slot = GetSlot();
        if (index == -1)
        {
            index = Cards.Count;
            Cards.Add(card);
            Slots.Add(slot);
        }
        else
        {
            Cards.Insert(index, card);
            Slots.Insert(index, slot);
        }

        card.CanCollide = true;
        if (Cards.Count > 1)
            Cards[^2].CanCollide = false;
    }

    protected virtual Transform GetSlot()
    {
        if (slotPool.Count > 0)
        {
            var slotInPool = slotPool[0];
            slotPool.Remove(slotInPool);
            return slotInPool;
        }
        var slot = Instantiate(slotPrefab, transform, false);
        return slot;
    }

    private void RemoveSlot(Transform slot)
    {
        if (Slots.Contains(slot))
            Slots.Remove(slot);
        slotPool.Add(slot);
    }
    
    
    protected virtual void RemoveCard(Card card, bool get = false)
    {
        var slot = Slots[Cards.IndexOf(card)];
        RemoveSlot(slot);
        Cards.Remove(card);
        if (!get) CardLayer.Instance?.cardPool?.ReturnCard(card);
    }

    public virtual Card GetCard(bool getFromPool = true)
    {
        if (Cards.Count == 0)
        {
            #if UNITY_EDITOR
            Debug.LogError("There is no card left in "+ GetType());
            #endif
            var cardPooled = getFromPool ? CardLayer.Instance?.cardPool?.GetCard() : null;
            if (cardPooled == null) return cardPooled;
            cardPooled.transform.position = transform.position;
            cardPooled.transform.rotation = transform.rotation;
            cardPooled.transform.localScale = transform.lossyScale;
            return cardPooled;
        }
        var card = Cards[^1];
        RemoveCard(card, true);
        if (!card.gameObject.activeSelf)
            card.gameObject.SetActive(true);
        if (Cards.Count > 0)
            Cards[^1].CanCollide = true;
        return card;
    }
    
  
}

