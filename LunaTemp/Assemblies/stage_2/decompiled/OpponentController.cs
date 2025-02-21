using DG.Tweening;
using UnityEngine;

public class OpponentController : CardPile
{
	[SerializeField]
	private float duration;

	[SerializeField]
	private Ease ease;

	public Sequence UpdatePositions(Card card)
	{
		int index = Cards.IndexOf(card);
		card.transform.SetParent(Slots[index], true);
		card.SortingOrder = sortingOrderMultiplier + index;
		card.Source = CardSource.Throw;
		Transform target = card.transform;
		float num = duration;
		Ease ease = this.ease;
		return CardPile.UpdatePosition(target, null, null, null, num, ease);
	}
}
