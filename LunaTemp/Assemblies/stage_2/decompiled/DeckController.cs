using System.Collections.Generic;
using UnityEngine;

public class DeckController : CardPile
{
	[SerializeField]
	private Vector3 offset;

	public void ShuffleForce(int cardCount, List<int> deckCardNoList)
	{
		for (int i = 0; i < cardCount; i++)
		{
			Card card = CardLayer.Instance.cardPool.GetCard();
			Add(card, i);
			int num = i + 1;
			card.No = deckCardNoList[deckCardNoList.Count - num];
			Slots[i].transform.localPosition = offset * i;
			card.transform.SetParent(Slots[i]);
			card.transform.localPosition = Vector3.zero;
			card.transform.localRotation = Quaternion.Euler(Vector3.zero);
			card.transform.localScale = Vector3.one;
			card.Source = CardSource.Deck;
			card.SortingOrder = sortingOrderMultiplier + i;
			if (i == cardCount - 1)
			{
				card.CanCollide = true;
			}
		}
	}
}
