using System.Collections.Generic;
using DG.Tweening;
using Luna.Unity;
using UnityEngine;

public class CardLayer : MonoBehaviour
{
	[LunaPlaygroundField("Start Turn", 1, "Game Settings", false, null)]
	public bool myTurn = true;

	[LunaPlaygroundField("Game Type -> 0 GinKnock / 1 StraightGin ", 2, "Game Settings", false, null)]
	public int straightGin;

	[LunaPlaygroundField("Last Discarded Card", 1, "Card / Hand Settings", false, null)]
	public string discardedCards = "1,2,3";

	private List<int> discardCardNoList = new List<int>();

	[LunaPlaygroundField("Player Hand Start Card List", 2, "Card / Hand Settings", false, null)]
	public string handStartCards = "1";

	private List<int> handStartCardNoList = new List<int>();

	[LunaPlaygroundField("Deck Card List", 3, "Card / Hand Settings", false, null)]
	public string deckCards = "1";

	private List<int> deckCardNoList = new List<int>();

	[LunaPlaygroundField("Opponent Throw Card List", 4, "Card / Hand Settings", false, null)]
	public string opponentThrowCardNo = "1";

	private List<int> opponentThrowCardNoList = new List<int>();

	[LunaPlaygroundField("Opponent Move List -> 1 From deck, 0 from thrown", 5, "Card / Hand Settings", false, null)]
	public string opponentPlay = "1";

	private List<int> opponentPlayList = new List<int>();

	[LunaPlaygroundField("Opponent Pick Delay", 1, "Opponent Settings", false, null)]
	[SerializeField]
	private int pickDelay = 1;

	[LunaPlaygroundField("Opponent Throw Delay", 2, "Opponent Settings", false, null)]
	[SerializeField]
	private int throwDelay = 1;

	[LunaPlaygroundField("Opponent Remaining Turn To Win", 3, "Opponent Settings", false, null)]
	public int opponentWinConditionTargetPlayIndex;

	public static CardLayer Instance;

	public CardPool cardPool;

	public HandController handController;

	public DeckController deckController;

	public ThrowController throwController;

	public DragController dragController;

	public OpponentController opponentController;

	public GameActionButton gameActionButton;

	[Header("Data")]
	[SerializeField]
	private int cardsStartCount = 52;

	public int _opponentPlayCounter = 0;

	private Sequence _pickCardOpponent;

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
		LifeCycle.GameStarted();
		Analytics.LogEvent("SuccessfullyLoaded", 2);
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
		if (_opponentPlayCounter >= opponentWinConditionTargetPlayIndex)
		{
			OpponentWin();
			return;
		}
		myTurn = !myTurn;
		dragController.SetTurn(myTurn);
		if (!myTurn)
		{
			PlayOpponent();
		}
	}

	public void OnHandDeadWoodChanged(int knockValue)
	{
		int buttonFlag = ((handController.CardCount <= 10 || (straightGin == 1 && knockValue > 0)) ? (-2) : knockValue);
		gameActionButton.Refresh(buttonFlag);
	}

	private void OpponentWin()
	{
		Analytics.LogEvent("Opponent Win", 0);
	}

	public void PlayOpponent()
	{
		switch (opponentPlayList[_opponentPlayCounter])
		{
		case 1:
			Invoke("OpponentPickCardFromDeck", pickDelay);
			break;
		case 2:
			Invoke("OpponentPickCardFromThrow", pickDelay);
			break;
		}
	}

	public void OpponentPickCardFromThrow()
	{
		Card card = throwController.GetCard();
		opponentController.Add(card);
		_pickCardOpponent = opponentController.UpdatePositions(card);
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

	private void ConvertList(string input, List<int> targetList)
	{
		if (string.IsNullOrWhiteSpace(input))
		{
			return;
		}
		string[] tokens = input.Split(',');
		string[] array = tokens;
		foreach (string token in array)
		{
			string trimmedToken = token.Trim();
			if (int.TryParse(trimmedToken, out var number))
			{
				targetList.Add(number);
			}
			else
			{
				Analytics.LogEvent("'" + trimmedToken + "' geçerli bir sayı değil.", 1);
			}
		}
	}
}
