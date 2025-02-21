using System;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;

public class CardLayer : MonoBehaviour
{
	public enum OpponentMoves
	{
		PickFromThrow,
		PickFromDeck
	}

	[Serializable]
	public class OpponentPlay
	{
		public OpponentMoves move;

		public float pickDelay = 1f;

		public float throwDelay = 1f;
	}

	[LunaPlaygroundField("Start Turn", 1, "Game Settings", false, null)]
	public bool myTurn = true;

	[LunaPlaygroundField("Last Discarded Card", 1, "Card / Hand Settings", false, null)]
	[SerializeField]
	private List<int> discardCardNoList = new List<int>();

	public static CardLayer Instance;

	public CardPool cardPool;

	public HandController handController;

	public DeckController deckController;

	public ThrowController throwController;

	public DragController dragController;

	public OpponentController opponentController;

	[Header("Data")]
	[SerializeField]
	private List<int> handStartCardNoList = new List<int>();

	[SerializeField]
	private int cardsStartCount = 52;

	[SerializeField]
	private List<int> deckCardNoList;

	[SerializeField]
	private List<int> opponentThrowCardNoList = new List<int>();

	public int _opponentPlayCounter = 0;

	public List<OpponentPlay> opponentPlayList = new List<OpponentPlay>();

	private Sequence _pickCardOpponent;

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
		dragController.SetTurn(myTurn);
		if (!myTurn)
		{
			PlayOpponent();
		}
	}

	public void ChangeTurn()
	{
		myTurn = !myTurn;
		dragController.SetTurn(myTurn);
		if (!myTurn)
		{
			PlayOpponent();
		}
	}

	public void PlayOpponent()
	{
		OpponentPlay play = opponentPlayList[_opponentPlayCounter];
		switch (play.move)
		{
		case OpponentMoves.PickFromDeck:
			Invoke("OpponentPickCardFromDeck", play.pickDelay);
			break;
		case OpponentMoves.PickFromThrow:
			Invoke("OpponentPickCardFromThrow", play.pickDelay);
			break;
		}
	}

	public void OpponentPickCardFromThrow()
	{
		Card card = throwController.GetCard();
		opponentController.Add(card);
		_pickCardOpponent = opponentController.UpdatePositions(card);
		float throwDelay = opponentPlayList[_opponentPlayCounter].throwDelay;
		_pickCardOpponent.OnComplete(delegate
		{
			Invoke("OpponentThrowCard", throwDelay);
		});
	}

	public void OpponentPickCardFromDeck()
	{
		Card card = deckController.GetCard();
		opponentController.Add(card);
		_pickCardOpponent = opponentController.UpdatePositions(card);
		float throwDelay = opponentPlayList[_opponentPlayCounter].throwDelay;
		_pickCardOpponent.OnComplete(delegate
		{
			Invoke("OpponentThrowCard", throwDelay);
		});
	}

	public void OpponentThrowCard()
	{
		Card card = opponentController.GetCard();
		card.No = opponentThrowCardNoList[_opponentPlayCounter];
		throwController.Add(card);
		throwController.UpdatePositions(card);
		_opponentPlayCounter++;
		ChangeTurn();
	}
}
