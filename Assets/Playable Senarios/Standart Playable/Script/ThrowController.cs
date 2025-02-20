using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ThrowController : CardPile
{
    [SerializeField] private Vector3 offset;
    [SerializeField] private float duration;
    [SerializeField] private CardLayer.Ease ease;
    public void DiscardForce(List<int> discardList)
    {
        for (var i = 0; i < discardList.Count; i++)
        {
            var card = CardLayer.Instance.cardPool.GetCard();
            Add(card, i);
            Slots[i].transform.localPosition = offset * i;
            card.No = discardList[i];
            card.transform.SetParent(Slots[i]);
            card.transform.localPosition = Vector3.zero;
            card.transform.localRotation = Quaternion.Euler(Vector3.zero);
            card.transform.localScale = Vector3.one;
            card.Source = CardSource.Throw;
            card.SortingOrder = sortingOrderMultiplier + i;
            if (i == discardList.Count - 1)
                card.CanCollide = true;
        }
    }

    public void UpdatePositions(Card card)
    {
        var index = Cards.IndexOf(card);
        card.transform.SetParent(Slots[index],worldPositionStays:true);
        StartCoroutine(CardLayer.Instance.UpdatePosition(card.transform, duration: duration, ease:ease));
        card.SortingOrder = sortingOrderMultiplier + index;
        card.Source = CardSource.Throw;
    }
    
}
