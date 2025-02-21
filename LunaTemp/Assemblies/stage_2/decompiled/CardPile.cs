using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public abstract class CardPile : MonoBehaviour
{
	[Header("CardPile Properties")]
	[SerializeField]
	protected int sortingOrderMultiplier;

	[SerializeField]
	public Transform slotPrefab;

	[SerializeField]
	protected List<Transform> slotPool;

	protected readonly List<Transform> Slots = new List<Transform>();

	protected readonly List<Card> Cards = new List<Card>();

	public int Count => Cards.Count;

	public virtual void Add(Card card)
	{
		Add(card, -1);
	}

	protected virtual void Add(Card card, int index)
	{
		Transform slot = GetSlot();
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
		{
			List<Card> cards = Cards;
			cards[cards.Count - 2].CanCollide = false;
		}
	}

	protected virtual Transform GetSlot()
	{
		if (slotPool.Count > 0)
		{
			Transform slotInPool = slotPool[0];
			slotPool.Remove(slotInPool);
			return slotInPool;
		}
		return Object.Instantiate(slotPrefab, base.transform, false);
	}

	private void RemoveSlot(Transform slot)
	{
		if (Slots.Contains(slot))
		{
			Slots.Remove(slot);
		}
		slotPool.Add(slot);
	}

	protected virtual void RemoveCard(Card card, bool get = false)
	{
		Transform slot = Slots[Cards.IndexOf(card)];
		RemoveSlot(slot);
		Cards.Remove(card);
		if (!get)
		{
			CardLayer.Instance?.cardPool?.ReturnCard(card);
		}
	}

	public virtual Card GetCard(bool getFromPool = true)
	{
		if (Cards.Count == 0)
		{
			Card cardPooled = ((!getFromPool) ? null : CardLayer.Instance?.cardPool?.GetCard());
			if (cardPooled == null)
			{
				return cardPooled;
			}
			cardPooled.transform.position = base.transform.position;
			cardPooled.transform.rotation = base.transform.rotation;
			cardPooled.transform.localScale = base.transform.lossyScale;
			return cardPooled;
		}
		List<Card> cards = Cards;
		Card card = cards[cards.Count - 1];
		RemoveCard(card, true);
		if (!card.gameObject.activeSelf)
		{
			card.gameObject.SetActive(true);
		}
		if (Cards.Count > 0)
		{
			List<Card> cards2 = Cards;
			cards2[cards2.Count - 1].CanCollide = true;
		}
		return card;
	}

	public static Sequence UpdatePosition(Transform target, Vector3? targetPosition = null, Quaternion? targetRotation = null, Vector3? targetScale = null, float duration = 1f, Ease ease = Ease.Linear, bool force = false, bool ignorePosition = false, bool ignoreRotation = false, bool ignoreScale = false, bool isLocal = true)
	{
		Sequence sequence = DOTween.Sequence();
		Vector3 valueOrDefault = targetPosition.GetValueOrDefault();
		if (!targetPosition.HasValue)
		{
			valueOrDefault = Vector3.zero;
			targetPosition = valueOrDefault;
		}
		Quaternion valueOrDefault2 = targetRotation.GetValueOrDefault();
		if (!targetRotation.HasValue)
		{
			valueOrDefault2 = Quaternion.Euler(Vector3.zero);
			targetRotation = valueOrDefault2;
		}
		valueOrDefault = targetScale.GetValueOrDefault();
		if (!targetScale.HasValue)
		{
			valueOrDefault = Vector3.one;
			targetScale = valueOrDefault;
		}
		if (force)
		{
			if (isLocal)
			{
				target.transform.localPosition = targetPosition.Value;
				target.transform.localRotation = targetRotation.Value;
			}
			else
			{
				target.transform.position = targetPosition.Value;
				target.transform.rotation = targetRotation.Value;
			}
		}
		else
		{
			if (isLocal)
			{
				if (!ignorePosition)
				{
					sequence.Join(target.transform.DOLocalMove(targetPosition.Value, duration).SetEase(ease));
				}
				if (!ignoreRotation)
				{
					sequence.Join(target.transform.DOLocalRotate(targetRotation.Value.eulerAngles, duration).SetEase(ease));
				}
			}
			else
			{
				if (!ignorePosition)
				{
					sequence.Join(target.transform.DOMove(targetPosition.Value, duration).SetEase(ease));
				}
				if (!ignoreRotation)
				{
					sequence.Join(target.transform.DORotate(targetRotation.Value.eulerAngles, duration).SetEase(ease));
				}
			}
			if (!ignoreScale)
			{
				sequence.Join(target.transform.DOScale(targetScale.Value, duration).SetEase(ease));
			}
		}
		return sequence;
	}
}
