using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class ThrowController : CardPile
{
	[SerializeField]
	private Vector3 offset;

	[SerializeField]
	private float duration;

	[SerializeField]
	private Ease ease;

	public void DiscardForce(List<int> discardList)
	{
		for (int i = 0; i < discardList.Count; i++)
		{
			Card card = CardLayer.Instance.cardPool.GetCard();
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
			{
				card.CanCollide = true;
			}
		}
	}

	public void UpdatePositions(Card card)
	{
		int index = Cards.IndexOf(card);
		card.transform.SetParent(Slots[index], true);
		Transform target = card.transform;
		float num = duration;
		Ease ease = this.ease;
		CardPile.UpdatePosition(target, null, null, null, num, ease);
		card.SortingOrder = sortingOrderMultiplier + index;
		card.Source = CardSource.Throw;
	}
}
