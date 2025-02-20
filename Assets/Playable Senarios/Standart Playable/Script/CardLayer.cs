using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class CardLayer : MonoBehaviour
{
    public static CardLayer Instance;
    public CardPool cardPool;
    
    public HandController handController;
    public DeckController deckController;
    public ThrowController throwController;
    public DragController dragController;
    [Header("Data")]
    [SerializeField] private List<int> handStartCardNoList = new();
    [SerializeField] private List<int> discardCardNoList = new();
    [SerializeField] private int cardsStartCount = 52;
    [SerializeField] private List<int> deckCardNoList;
    public int lastCardInHand;
    private void Awake()
    {
        Instance = this;
        handController.Init();
        dragController.Init();
    }

    private void Start()
    {
        deckController.ShuffleForce(cardsStartCount, deckCardNoList);
        throwController.DiscardForce(discardCardNoList);
        handController.DealForce(handStartCardNoList);
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
