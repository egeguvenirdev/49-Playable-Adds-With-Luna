using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using DG.Tweening;
using UnityEngine;
using UnityEngine.EventSystems;

public class CardLayer : MonoBehaviour
{
    [LunaPlaygroundField("Start Turn", 1, "Game Settings")]
    public bool myTurn = true;
    
    [LunaPlaygroundField("Last Discarded Card", 1, "Card / Hand Settings")]
    public string discardedCards = "1,2,3";
    private List<int> discardCardNoList = new();
    [LunaPlaygroundField("Player Hand Start Card List", 2, "Card / Hand Settings")]
    public string handStartCards = "1";
    private List<int> handStartCardNoList = new();
    [LunaPlaygroundField("Deck Card List", 3, "Card / Hand Settings")]
    public string deckCards = "1";
    private List<int> deckCardNoList = new();
    [LunaPlaygroundField("Opponent Throw Card List", 4, "Card / Hand Settings")]
    public string opponentThrowCardNo = "1";
    private List<int> opponentThrowCardNoList = new();
    [LunaPlaygroundField("Opponent Move List -> 1 From deck, 0 from thrown", 5, "Card / Hand Settings")]
    public string opponentPlay = "1";
    private List<int> opponentPlayList = new();
    
    [LunaPlaygroundField("Opponent Pick Delay", 1, "Opponent Settings")]
    [SerializeField] private int pickDelay = 1;
    [LunaPlaygroundField("Opponent Throw Delay", 2, "Opponent Settings")]
    [SerializeField] private int throwDelay = 1;

    public static CardLayer Instance;
    public CardPool cardPool;
    
    public HandController handController;
    public DeckController deckController;
    public ThrowController throwController;
    public DragController dragController;
    public OpponentController opponentController;
    public GameActionButton gameActionButton;
    [Header("Data")]
    [SerializeField] private int cardsStartCount = 52;
    public int _opponentPlayCounter = 0;
    public int straightGin;
    public int opponentWinConditionTargetPlayIndex;
    
    private void Awake()
    {
        ConvertList(discardedCards, discardCardNoList);
        ConvertList(handStartCards, handStartCardNoList);
        ConvertList(deckCards, deckCardNoList);
        ConvertList(opponentThrowCardNo, opponentThrowCardNoList);
        ConvertList(opponentPlay, opponentPlayList);
        
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
        if (_opponentPlayCounter >= opponentWinConditionTargetPlayIndex)
        {
            OpponentWin();
            return;
        }
        myTurn = !myTurn;
        dragController.SetTurn(myTurn);
        if (!myTurn)
            PlayOpponent();
    }

    public void OnHandDeadWoodChanged(int knockValue)
    {
        var buttonFlag = 
            (handController.CardCount <= 10 || (straightGin == 1 && knockValue > 0)) ? -2 : knockValue;
        gameActionButton.Refresh(buttonFlag);
    }

    private void OpponentWin()
    {
        Debug.Log("Opponent Win");
    }
    public void PlayOpponent()
    {
        var play = opponentPlayList[_opponentPlayCounter];
        switch (play)
        {
            case 1:
                Invoke(nameof(OpponentPickCardFromDeck), pickDelay);
                break;
            case 2:
                Invoke(nameof(OpponentPickCardFromThrow), pickDelay);
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

    private void ConvertList(string input, List<int> targetList)
    {
        if (string.IsNullOrWhiteSpace(input)) return;

        string[] tokens = input.Split(',');

        foreach (string token in tokens)
        {
            string trimmedToken = token.Trim();

            if (int.TryParse(trimmedToken, out int number))
            {
                targetList.Add(number);
            }
            else
            {
                Luna.Unity.Analytics.LogEvent($"'{trimmedToken}' geçerli bir sayı değil.", 0);
            }
        }
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
