using System;
using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using UnityEngine.EventSystems;

public class CardLayer : MonoBehaviour
{
    [LunaPlaygroundField("Start Turn", 1, "Game Settings")]
    public bool myTurn = true;
    
    [LunaPlaygroundField("Last Discarded Card", 1, "Card / Hand Settings")]
    [SerializeField] private List<int> discardCardNoList = new();
    
    public static CardLayer Instance;
    public CardPool cardPool;
    
    public HandController handController;
    public DeckController deckController;
    public ThrowController throwController;
    public DragController dragController;
    public OpponentController opponentController;
    
    [Header("Data")]
    [SerializeField] private List<int> handStartCardNoList = new();
    [SerializeField] private int cardsStartCount = 52;
    [SerializeField] private List<int> deckCardNoList;
    [SerializeField] private List<int> opponentThrowCardNoList = new();
    public int _opponentPlayCounter = 0;

    public enum OpponentMoves
    {
        PickFromThrow,
        PickFromDeck,
    }
    [Serializable]
    public class OpponentPlay
    {
        public OpponentMoves move;
        public float pickDelay = 1f;
        public float throwDelay = 1f;
    }

    public List<OpponentPlay> opponentPlayList = new();
    private void Awake()
    {
        Input.multiTouchEnabled = false;
        Instance = this;
        handController.Init();
        dragController.Init();
    }
    private void Start()
    {
        deckController.ShuffleForce(cardsStartCount, deckCardNoList);
        throwController.DiscardForce(discardCardNoList);
        handController.DealForce(handStartCardNoList);
        dragController.SetTurn(myTurn);
        if (!myTurn)
            PlayOpponent();
    }

    public void ChangeTurn()
    {
        myTurn = !myTurn;
        dragController.SetTurn(myTurn);
        if (!myTurn)
            PlayOpponent();
    }
    public void PlayOpponent()
    {
        var play = opponentPlayList[_opponentPlayCounter];
        switch (play.move)
        {
            case OpponentMoves.PickFromDeck:
                Invoke(nameof(OpponentPickCardFromDeck), play.pickDelay);
                break;
            case OpponentMoves.PickFromThrow:
                Invoke(nameof(OpponentPickCardFromThrow), play.pickDelay);
                break;
            default:
                break;
        }
    }

    private Sequence _pickCardOpponent;
    public void OpponentPickCardFromThrow()
    {
        var card = throwController.GetCard();
        opponentController.Add(card);
        _pickCardOpponent = opponentController.UpdatePositions(card);
        var throwDelay = opponentPlayList[_opponentPlayCounter].throwDelay;
        _pickCardOpponent.OnComplete(() =>
        {
            Invoke(nameof(OpponentThrowCard), throwDelay);
        });
    }
    public void OpponentPickCardFromDeck()
    {
        var card = deckController.GetCard();
        opponentController.Add(card);
        _pickCardOpponent = opponentController.UpdatePositions(card);
        var throwDelay = opponentPlayList[_opponentPlayCounter].throwDelay;
        _pickCardOpponent.OnComplete(() =>
        {
            Invoke(nameof(OpponentThrowCard), throwDelay);
        }); 
    }
    public void OpponentThrowCard()
    {
        var card = opponentController.GetCard();
        card.No = opponentThrowCardNoList[_opponentPlayCounter];
        throwController.Add(card);
        throwController.UpdatePositions(card);
        _opponentPlayCounter++;
        ChangeTurn();
    }
}


public static class Utils
{
    public static void Swap<T>(this List<T> list, int indexA, int indexB)
    {
        (list[indexA], list[indexB]) = (list[indexB], list[indexA]);
    }
    public static bool IsOverUIElement() =>
        (Input.touchCount > 0 && EventSystem.current.IsPointerOverGameObject(Input.GetTouch(0).fingerId)) ||
        EventSystem.current.IsPointerOverGameObject();
}
