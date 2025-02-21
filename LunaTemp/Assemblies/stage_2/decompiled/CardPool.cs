using System.Collections.Generic;
using UnityEngine;

public class CardPool : MonoBehaviour
{
	private readonly List<Card> _cards = new List<Card>();

	[SerializeField]
	private Card cardPrefab;

	public Card GetCard()
	{
		if (_cards.Count <= 0)
		{
			_cards.Add(Object.Instantiate(cardPrefab, base.transform));
		}
		List<Card> cards = _cards;
		Card card = cards[cards.Count - 1];
		card.gameObject.SetActive(true);
		_cards.Remove(card);
		return card;
	}

	public void ReturnCard(Card card)
	{
		if (!_cards.Contains(card))
		{
			card.transform.SetParent(base.transform);
			_cards.Add(card);
			card.ResetCard();
		}
	}
}
