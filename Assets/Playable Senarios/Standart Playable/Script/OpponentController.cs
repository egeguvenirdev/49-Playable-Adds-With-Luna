using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class OpponentController : CardPile
{
    [SerializeField] private float duration;
    [SerializeField] private Ease ease;
    public Sequence UpdatePositions(Card card)
    {
        var index = Cards.IndexOf(card);
        card.transform.SetParent(Slots[index],worldPositionStays:true);
        card.SortingOrder = sortingOrderMultiplier + index;
        card.Source = CardSource.Throw;
        return  CardPile.UpdatePosition(card.transform, duration: duration, ease:ease);
    }
}
