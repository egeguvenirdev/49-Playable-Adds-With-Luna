using System.Collections.Generic;
using UnityEngine;
public class CardPool : MonoBehaviour
{
    private readonly List<Card> _cards = new();
    [SerializeField] private Card cardPrefab;
    
    public Card GetCard()
    {
        if (_cards.Count <= 0)
        {
            _cards.Add(Instantiate(cardPrefab,transform));
        }
        var card = _cards[^1];
        card.gameObject.SetActive(true);
        _cards.Remove(card);
        return card;
    }

    public void ReturnCard(Card card)
    {
        if (_cards.Contains(card)) return;
        card.transform.SetParent(transform);
        _cards.Add(card);
        card.ResetCard();
    }
}
