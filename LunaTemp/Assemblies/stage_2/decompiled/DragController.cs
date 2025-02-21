using DG.Tweening;
using UnityEngine;

public class DragController : MonoBehaviour
{
	private Vector3 _prevPosition;

	private Vector3 _targetPosition;

	private Vector3 _movementDirection;

	private float _draggingCardAnimationRotationSpeed;

	public int lastPickedCardFromThrowZoneNo = -1;

	[SerializeField]
	private Camera gameCamera;

	private Ray _ray;

	private RaycastHit _hit;

	private Vector3 _mousePosition;

	private const float RayDistance = float.PositiveInfinity;

	[SerializeField]
	private LayerMask planeMask;

	[SerializeField]
	private LayerMask cardMask;

	public Card draggingCard;

	private Vector3 _offset;

	[SerializeField]
	private Transform slot;

	[SerializeField]
	private Transform handEdge;

	private bool _draggingCardInsideHand = false;

	private int _targetIndex;

	private bool _clicked = false;

	private float _startPickTime;

	private const float DeckToHandThreshold = 0.6f;

	[Header("Controls")]
	public bool fullDisable = true;

	public bool canFreeControl = true;

	public bool canPickCardFromDeck;

	public bool canPickCardFromThrow;

	public bool canThrowCard;

	private int _lastHandIndexOnClick;

	private CardLayer _cardLayer;

	private Sequence _moveZero;

	public void Init()
	{
		_cardLayer = CardLayer.Instance;
		fullDisable = false;
	}

	public void SetTurn(bool myTurn)
	{
		if (!myTurn)
		{
			ChangeControl(false, false, false);
			return;
		}
		bool canThrow = _cardLayer.handController.CardCount == 11;
		ChangeControl(!canThrow, !canThrow, canThrow);
	}

	private void ChangeControl(bool pickFromDeck, bool pickFromThrow, bool throwCard)
	{
		canPickCardFromDeck = pickFromDeck;
		canPickCardFromThrow = pickFromThrow;
		canThrowCard = throwCard;
	}

	private Card GetClickedCard(Card card)
	{
		switch (card.Source)
		{
		case CardSource.Hand:
			card.HighlightNo = -1;
			_cardLayer.handController.UpdateCardHighlights(card);
			return card;
		case CardSource.Deck:
			_startPickTime = Time.time;
			return _cardLayer.deckController.GetCard();
		case CardSource.Throw:
			return _cardLayer.throwController.GetCard();
		default:
			return card;
		}
	}

	private void ThrowCardToThrowZone(Card card, bool isSamePlace = false)
	{
		if (!isSamePlace)
		{
		}
		if (card.Source == CardSource.Hand)
		{
			_cardLayer.handController.UpdateCardHighlights();
			_cardLayer.handController.CheckHandChange();
		}
		_cardLayer.throwController.Add(card);
		_cardLayer.throwController.UpdatePositions(card);
	}

	private void AddCardInHand(Card card, int index = -1)
	{
		if (index == -1)
		{
			_cardLayer.handController.Add(card);
		}
		else
		{
			_cardLayer.handController.Add(card, index);
		}
		_cardLayer.handController.CheckHandChange();
	}

	private void AddCard(Card card)
	{
		draggingCard = card;
	}

	private void MoveToZero(Card card, float delay = 0f, bool force = false)
	{
		card.transform.SetParent(slot, true);
		Transform target = card.transform;
		bool force2 = force;
		_moveZero = CardPile.UpdatePosition(target, null, null, null, 0.2f, Ease.Linear, force2);
	}

	private void Release()
	{
		if (!_clicked)
		{
			return;
		}
		_clicked = false;
		if ((object)draggingCard == null)
		{
			return;
		}
		if (_moveZero.active)
		{
			_moveZero.Kill();
		}
		if (_draggingCardInsideHand)
		{
			if (draggingCard.Source != CardSource.Hand)
			{
				MoveEnd();
			}
			AddCardInHand(draggingCard);
		}
		else
		{
			switch (draggingCard.Source)
			{
			case CardSource.Hand:
				if (lastPickedCardFromThrowZoneNo == draggingCard.No || !canThrowCard)
				{
					AddCardInHand(draggingCard, _lastHandIndexOnClick);
					draggingCard = null;
					return;
				}
				ThrowCardToThrowZone(draggingCard);
				MoveEnd(true);
				break;
			case CardSource.Throw:
				ThrowCardToThrowZone(draggingCard, true);
				break;
			case CardSource.Deck:
				if (Time.time - _startPickTime > 0.6f)
				{
					ThrowCardToThrowZone(draggingCard);
					MoveEnd(true);
				}
				else
				{
					AddCardInHand(draggingCard);
					MoveEnd();
				}
				break;
			}
		}
		draggingCard = null;
	}

	private void MoveEnd(bool throwCard = false)
	{
		if (!throwCard)
		{
			bool canThrow = _cardLayer.handController.CardCount == 11;
			ChangeControl(!canThrow, !canThrow, canThrow);
		}
		else
		{
			ChangeControl(false, false, false);
			_cardLayer.ChangeTurn();
		}
	}

	private Vector3 GetSlotPosition()
	{
		if (Physics.Raycast(_ray, out _hit, float.PositiveInfinity, planeMask))
		{
			Vector3 cardTargetPosition = _hit.point - _offset;
			Vector3 cardLimitedPosition = new Vector3(cardTargetPosition.x, handEdge.position.y, handEdge.position.z);
			return canFreeControl ? cardTargetPosition : cardLimitedPosition;
		}
		return Vector3.zero;
	}

	private void OnClick()
	{
		_mousePosition = Input.mousePosition;
		_ray = gameCamera.ScreenPointToRay(_mousePosition);
		if (Physics.Raycast(_ray, out _hit, float.PositiveInfinity, cardMask))
		{
			Card card = _hit.transform.GetComponent<Card>();
			CardSource cardSource = card.Source;
			bool sourceDeck = cardSource == CardSource.Deck;
			bool sourceThrow = cardSource == CardSource.Throw;
			bool sourceHand = cardSource == CardSource.Hand;
			if ((sourceDeck && !canPickCardFromDeck) || (sourceThrow && !canPickCardFromThrow))
			{
				return;
			}
			Card selectedCard = GetClickedCard(card);
			if (selectedCard != null && selectedCard.Source != CardSource.Opponent)
			{
				AddCard(selectedCard);
				_offset = _hit.point - draggingCard.transform.position;
				_targetIndex = _cardLayer.handController.GetIndexFromWorldPosition(draggingCard.transform.position);
				_lastHandIndexOnClick = _targetIndex;
				_targetPosition = GetSlotPosition();
				SlotPositionUpdate(true);
				SlotRotationUpdate(draggingCard, true);
				MoveToZero(draggingCard);
				if (sourceHand)
				{
					ScaleAnimation();
				}
				else if (!sourceDeck)
				{
				}
			}
		}
		_clicked = true;
	}

	private void OnDrag()
	{
		if (!_clicked || draggingCard == null)
		{
			return;
		}
		_mousePosition = Input.mousePosition;
		_ray = gameCamera.ScreenPointToRay(_mousePosition);
		if (!Physics.Raycast(_ray, out _hit, float.PositiveInfinity, planeMask))
		{
			return;
		}
		_draggingCardInsideHand = slot.transform.position.y <= handEdge.position.y;
		_targetIndex = _cardLayer.handController.GetIndexFromWorldPosition(draggingCard.transform.position);
		if (_draggingCardInsideHand)
		{
			if (_cardLayer.handController.IsSwap(draggingCard, _targetIndex))
			{
				_cardLayer.handController.Swap(draggingCard, _targetIndex);
				ScaleAnimation();
			}
			else if (!_cardLayer.handController.IsCardInHandList(draggingCard))
			{
				_cardLayer.handController.Add(draggingCard, _targetIndex, false);
				_cardLayer.handController.UpdateSlots(true);
				_cardLayer.handController.SetCardSortingOrder();
				ScaleAnimation();
			}
		}
		else
		{
			if (_cardLayer.handController.IsCardInHandList(draggingCard))
			{
				_cardLayer.handController.RemoveCard(draggingCard, false);
				_cardLayer.handController.UpdateSlots();
				AddCard(draggingCard);
				ScaleAnimation(false, false);
			}
			draggingCard.SortingOrder = 200;
		}
		_prevPosition = slot.transform.position;
		_targetPosition = GetSlotPosition();
		_movementDirection = _targetPosition - _prevPosition;
		_movementDirection.z = 0f;
		_draggingCardAnimationRotationSpeed = _movementDirection.magnitude * 0.25f / Time.deltaTime;
		SlotPositionUpdate();
		SlotRotationUpdate(draggingCard);
	}

	private void Update()
	{
		if (!fullDisable)
		{
			if (Input.GetMouseButtonDown(0) && !Utils.IsOverUIElement())
			{
				OnClick();
			}
			if (Input.GetMouseButtonUp(0))
			{
				Release();
			}
			OnDrag();
		}
	}

	private void SlotPositionUpdate(bool force = false)
	{
		slot.position = _targetPosition;
	}

	private void SlotRotationUpdate(Card selectedCard, bool force = false)
	{
		float targetRotationZ = 0f;
		if (selectedCard.Source == CardSource.Hand && _draggingCardInsideHand)
		{
			targetRotationZ = -1f * _cardLayer.handController.handSlotArc.GetSlotRotationZ(_cardLayer.handController.SlotCount, _targetIndex);
		}
		Quaternion targetRotation = Quaternion.Euler(slot.localEulerAngles.x, slot.localEulerAngles.y, targetRotationZ);
		if (!force)
		{
			if (_movementDirection.sqrMagnitude > 0.0001f)
			{
				float rotationAngle = Mathf.Atan2(_movementDirection.x, _movementDirection.y) * 57.29578f;
				Quaternion animatedRotation = Quaternion.Euler(slot.localEulerAngles.x, slot.localEulerAngles.y, rotationAngle);
				slot.localRotation = Quaternion.Slerp(slot.localRotation, animatedRotation, Time.deltaTime * _draggingCardAnimationRotationSpeed);
			}
			DOTween.Kill(slot);
			if (Quaternion.Angle(slot.localRotation, targetRotation) > 0.1f)
			{
				slot.DOLocalRotate(targetRotation.eulerAngles, 0.3f).SetEase(Ease.OutQuad);
			}
		}
		else
		{
			slot.localRotation = targetRotation;
		}
	}

	private void ScaleAnimation(bool scaleUp = true, bool insideHand = true)
	{
	}
}
