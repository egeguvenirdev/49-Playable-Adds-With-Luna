using UnityEngine;
public class DragController : MonoBehaviour
{
    private Vector3 _prevPosition;
    private Vector3 _targetPosition;
    private Vector3 _movementDirection;
    private float _draggingCardAnimationRotationSpeed;
    public int lastPickedCardFromThrowZoneNo = -1;
   
    [SerializeField] private Camera gameCamera;
    private Ray _ray;
    private RaycastHit _hit;
    private Vector3 _mousePosition;
    private const float RayDistance = Mathf.Infinity;
    [SerializeField] private LayerMask planeMask;
    [SerializeField] private LayerMask cardMask;
    public Card draggingCard;
    private Vector3 _offset;
    [SerializeField] private Transform slot;
    [SerializeField] private Transform handEdge;
    private bool _draggingCardInsideHand = false;
    private int _targetIndex;
    private bool _clicked = false;
    private float _startPickTime;
    private const float DeckToHandThreshold = .6f;
    
    [Header("Controls")]
    public bool fullDisable = true;
    public bool canFreeControl = true;
    public bool canPickCardFromDeck, canPickCardFromThrow, canThrowCard;
    
    // [TabGroup("Animation Parameters")]  [SerializeField] private float draggingCardMoveLocallyZeroDuration;
    // [TabGroup("Animation Parameters")]  [SerializeField] private float normalizeRotationDuration;
    // [TabGroup("Animation Parameters")]  [SerializeField] [Range(0, 1)] private float animatedRotationSpeed;
    // [TabGroup("Animation Parameters")]  [SerializeField] private float scaleUpMultiplier, scaleUpDuration;
    private int _lastHandIndexOnClick;
    private CardLayer _cardLayer;
    public void Init()
    {
        _cardLayer = CardLayer.Instance;
        //ChangeControl(false,false,false);
    }
    public void ChangeControl(bool pickFromDeck, bool pickFromThrow, bool throwCard)
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
                //_cardLayer.handController.UpdateCardHighlights(card); //todo: highlight
                return card;
            case CardSource.Deck:
            {
                _startPickTime = Time.time;
                var cardFromDeck = _cardLayer.deckController.GetCard();
                return cardFromDeck;
            }
            case CardSource.Throw:
            {
                return _cardLayer.throwController.GetCard();
            }
            case CardSource.None:
            default:
                return card;
        }
    }
    private  void ThrowCardToThrowZone(Card card, bool isSamePlace = false)
    {
        if (!isSamePlace)
        {
            //_cardLayer.OnThrowCard?.Invoke(card.No);
        }
        if (card.Source == CardSource.Hand)
        {
           // _cardLayer.handController.UpdateCardHighlights();
           // _cardLayer.handController.CheckHandChange();
        }
        _cardLayer.throwController.Add(card);
        _cardLayer.throwController.UpdatePositions(card);
    }
    
    private void AddCardInHand(Card card, int index = -1)
    {
         if (index == -1)
             _cardLayer.handController.Add(card);
         else
             _cardLayer.handController.Add(card, index: index);
        
         //_cardLayer.handController.CheckHandChange();
    }
    private void AddCard(Card card)
    {
        draggingCard = card;
    }
    
    private void MoveToZero(Card card, float delay = 0f, bool force = false)
    {
        card.transform.SetParent(slot,worldPositionStays:true);
        StartCoroutine(_cardLayer.UpdatePosition(card.transform, duration: .2f, force: force));
    }

    private void Release()
    {
        if (!_clicked) return;
        _clicked = false;
        if (draggingCard is null) return;
        //ScaleAnimation(scaleUp:false);
        if (_draggingCardInsideHand)
        {
            //if (draggingCard.Source == CardSource.Throw)
                //cardLayer.OnPickCard?.Invoke(draggingCard.No,false);
            //if (draggingCard.Source != CardSource.Hand)
               // MoveEnd();
            AddCardInHand(draggingCard);
        }
        else
        {
            switch (draggingCard.Source)
            {
                case CardSource.Hand when lastPickedCardFromThrowZoneNo == draggingCard.No || !canThrowCard:
                   // cardLayer?.OnTryToThrowCard?.Invoke(draggingCard);
                    AddCardInHand(draggingCard, _lastHandIndexOnClick);
                    draggingCard = null;
                    return;
                case CardSource.Hand:
                    //cardLayer?.OnTryToThrowCard?.Invoke(draggingCard);
                    ThrowCardToThrowZone(draggingCard);
                    //MoveEnd();
                    break;
                case CardSource.Throw:
                    ThrowCardToThrowZone(draggingCard,true);
                    break;
                case CardSource.Deck:
                {
                    if ((Time.time - _startPickTime) > DeckToHandThreshold) 
                    {
                        ThrowCardToThrowZone(draggingCard);
                    }
                    else
                    {
                        AddCardInHand(draggingCard);
                    }
                    MoveEnd();
                    break;
                }
                case CardSource.None:
                default:
                    break;
            }
        }
        draggingCard = null;
    }
    private void MoveEnd()
    {
        //cardLayer.OnMoved?.Invoke();
    }
    
    private Vector3 GetSlotPosition()
    {
        if (Physics.Raycast(_ray, out _hit, RayDistance, planeMask))
        {
            var cardTargetPosition = _hit.point - _offset;
            var cardLimitedPosition = new Vector3(cardTargetPosition.x, handEdge.position.y, handEdge.position.z);
            return canFreeControl ? cardTargetPosition : cardLimitedPosition;
        }
        else
            return Vector3.zero;
    }
    
    private void OnClick()
    {
        _mousePosition = Input.mousePosition;
        _ray = gameCamera.ScreenPointToRay(_mousePosition);
        if (Physics.Raycast(_ray, out _hit, RayDistance, layerMask: cardMask))
        {
            var card = _hit.transform.GetComponent<Card>();
            var cardSource = card.Source;
            var sourceDeck = cardSource == CardSource.Deck;
            var sourceThrow = cardSource == CardSource.Throw;
            var sourceHand = cardSource == CardSource.Hand;
            // if (sourceDeck || sourceThrow)
            //     cardLayer.OnTryToPickCard?.Invoke(card);
            if ((sourceDeck && !canPickCardFromDeck) ||
                (sourceThrow && !canPickCardFromThrow)) return;
            var selectedCard = GetClickedCard(card);
            
            if (selectedCard != null && selectedCard.Source != CardSource.Opponent)
            {
               // if (sourceThrow) cardLayer.throwPile.KillSequence();
                AddCard(selectedCard);
                _offset = _hit.point - draggingCard.transform.position;
                _targetIndex = _cardLayer.handController.GetIndexFromWorldPosition(draggingCard.transform.position);
                _lastHandIndexOnClick = _targetIndex;
                _targetPosition = GetSlotPosition();
                SlotPositionUpdate(force:true);
                SlotRotationUpdate(draggingCard, force:true);
               
                MoveToZero(draggingCard , force:false);
                if (sourceHand)
                    ScaleAnimation();
                else if (sourceDeck)
                {
                    //cardLayer.OnPickCard?.Invoke(-1,true);
                }
            }
        }
        _clicked = true;
    }

    private void OnDrag()
    {
        if (!_clicked) return;
        if (draggingCard == null) return;
        _mousePosition = Input.mousePosition;
        _ray = gameCamera.ScreenPointToRay(_mousePosition);
        if (!Physics.Raycast(_ray, out _hit, RayDistance, planeMask)) return;
        _draggingCardInsideHand =  slot.transform.position.y <= handEdge.position.y;
        _targetIndex = _cardLayer.handController.GetIndexFromWorldPosition(draggingCard.transform.position);
        if (_draggingCardInsideHand)
        {
            var isSwap = _cardLayer.handController.IsSwap(draggingCard,_targetIndex);
            if (isSwap)
            {
                _cardLayer.handController.Swap(draggingCard,_targetIndex);
                ScaleAnimation();
            }
            else
            {
                if (!_cardLayer.handController.IsCardInHandList(draggingCard))
                {
                    _cardLayer.handController.Add(draggingCard,_targetIndex,updateStatus:false);
                    _cardLayer.handController.UpdateSlots(force: true);
                    _cardLayer.handController.SetCardSortingOrder();
                    ScaleAnimation();
                }
            }
        }
        else
        {
            if (_cardLayer.handController.IsCardInHandList(draggingCard))
            {
                _cardLayer.handController.RemoveCard(draggingCard, returnPool:false);
                _cardLayer.handController.UpdateSlots();
                AddCard(draggingCard);
                ScaleAnimation(scaleUp:false,insideHand:false);
            }
            draggingCard.SortingOrder = 200;
        }
                
        _prevPosition = slot.transform.position;
        _targetPosition = GetSlotPosition();
        _movementDirection = _targetPosition - _prevPosition;
        _movementDirection.z = 0;
        _draggingCardAnimationRotationSpeed = _movementDirection.magnitude * .25f / Time.deltaTime;
        SlotPositionUpdate();
        SlotRotationUpdate(draggingCard);
    }
    private void Update()
    {
        if (fullDisable) return;
        if (Input.GetMouseButtonDown(0) && !Utils.IsOverUIElement())
            OnClick();
        
        if (Input.GetMouseButtonUp(0))
            Release();
        OnDrag();

    }
    private void SlotPositionUpdate(bool force = false)
    {
        slot.position = _targetPosition;
    }

    private void SlotRotationUpdate(Card selectedCard, bool force = false)
    {
        var targetRotationZ = 0f;
        if (_draggingCardInsideHand)
        {
            targetRotationZ = -1f * _cardLayer.handController.handSlotArc.GetSlotRotationZ(_cardLayer.handController.SlotCount,_targetIndex);
        }
        var targetRotation = Quaternion.Euler(slot.localEulerAngles.x, slot.localEulerAngles.y, targetRotationZ);
        if (!force)
        {
            // if (_movementDirection.sqrMagnitude > 0.0001f)
            // {
            //     var rotationAngle = Mathf.Atan2(_movementDirection.x, _movementDirection.y) * Mathf.Rad2Deg;
            //     var animatedRotation = Quaternion.Euler(slot.localEulerAngles.x, slot.localEulerAngles.y, rotationAngle);
            //     slot.localRotation = Quaternion.Slerp(slot.localRotation , animatedRotation , Time.deltaTime * _draggingCardAnimationRotationSpeed);
            // }
            // if (Quaternion.Angle(slot.localRotation , targetRotation) > .1f)
            //     Tween.LocalRotation(slot, targetRotation, normalizeRotationDuration, Ease.OutQuad);
            slot.localRotation = targetRotation;
        }
        else
        {
            slot.localRotation = targetRotation;
        }
    }
    
    private void ScaleAnimation(bool scaleUp = true,bool insideHand = true)
    {
      //  CardLayer.Instance.handController.ScaleAnimation(scaleUp ?_targetIndex : -5, scaleUpMultiplier, scaleUpDuration, insideHand ? null : draggingCard);
    }
}
