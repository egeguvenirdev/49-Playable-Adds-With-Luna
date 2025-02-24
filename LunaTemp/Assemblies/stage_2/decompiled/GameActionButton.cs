using System;
using TMPro;
using UnityEngine;

public class GameActionButton : MonoBehaviour
{
	[SerializeField]
	private GameManager gameManager;

	[SerializeField]
	private GameObject holder;

	[SerializeField]
	private LayerMask gameActionButtonLayerMask;

	[SerializeField]
	private float moveUpY;

	[SerializeField]
	private float moveDownY;

	[SerializeField]
	private Texture textureGin;

	[SerializeField]
	private Texture texturePass;

	[SerializeField]
	private Texture textureKnock;

	[SerializeField]
	private MeshRenderer buttonMeshRenderer;

	[SerializeField]
	private Transform buttonTransform;

	[SerializeField]
	private TextMeshPro knockValueText;

	[SerializeField]
	private float rayDistance = 50f;

	[SerializeField]
	private SpriteRenderer shadowSpriteRenderer;

	[SerializeField]
	private Transform shadowTransform;

	[SerializeField]
	private SpriteRenderer frameSpriteRenderer;

	[SerializeField]
	private SpriteRenderer effectSpriteRenderer;

	private bool _isShown;

	private bool _isClicked;

	private Camera _gameCamera;

	private GameActionButtonType _lastType = GameActionButtonType.None;

	public static GameActionButtonType GetActionButtonType(int value)
	{
		if (1 == 0)
		{
		}
		GameActionButtonType result;
		if (value <= 10)
		{
			if (value >= 1)
			{
				result = GameActionButtonType.Knock;
				goto IL_0039;
			}
			switch (value)
			{
			case -2:
				break;
			case -1:
				goto IL_0029;
			case 0:
				goto IL_002d;
			default:
				goto IL_0035;
			}
		}
		result = GameActionButtonType.None;
		goto IL_0039;
		IL_002d:
		result = GameActionButtonType.Gin;
		goto IL_0039;
		IL_0039:
		if (1 == 0)
		{
		}
		return result;
		IL_0029:
		result = GameActionButtonType.Pass;
		goto IL_0039;
		IL_0035:
		result = GameActionButtonType.None;
		goto IL_0039;
	}

	private void Start()
	{
		shadowSpriteRenderer.SetTransparency(0f);
		frameSpriteRenderer.SetTransparency(0f);
		effectSpriteRenderer.SetTransparency(0f);
		_gameCamera = Camera.main;
	}

	public void Refresh(int buttonFlag)
	{
		GameActionButtonType type = GetActionButtonType(buttonFlag);
		knockValueText.gameObject.SetActive(type == GameActionButtonType.Knock);
		if (type == GameActionButtonType.Knock)
		{
			knockValueText.text = buttonFlag.ToString();
		}
		if (type == GameActionButtonType.None)
		{
			Hide();
		}
		else
		{
			SetButtonTexture(type);
			Show();
		}
		_lastType = type;
	}

	private Texture GetButtonTexture(GameActionButtonType type)
	{
		if (1 == 0)
		{
		}
		Texture result;
		switch (type)
		{
		case GameActionButtonType.Gin:
			result = textureGin;
			break;
		case GameActionButtonType.Knock:
			result = textureKnock;
			break;
		case GameActionButtonType.Pass:
			result = texturePass;
			break;
		case GameActionButtonType.None:
			result = null;
			break;
		default:
			throw new ArgumentOutOfRangeException("type", type, null);
		}
		if (1 == 0)
		{
		}
		return result;
	}

	private void SetButtonTexture(GameActionButtonType type)
	{
		if (_lastType != type && type != GameActionButtonType.None)
		{
			MaterialPropertyBlock matBlock = new MaterialPropertyBlock();
			Texture texture = GetButtonTexture(type);
			matBlock.SetTexture("_MainTex", texture);
			buttonMeshRenderer.SetPropertyBlock(matBlock, 0);
		}
	}

	private void Show()
	{
		if (!_isShown)
		{
			_isShown = true;
			holder.SetActive(true);
		}
	}

	private void Hide()
	{
		if (_isShown)
		{
			_isShown = false;
			holder.SetActive(false);
		}
	}

	private void Update()
	{
		if (_isShown)
		{
			if (Input.GetMouseButtonUp(0))
			{
				OnMouseUp();
			}
			if (Input.GetMouseButtonDown(0))
			{
				OnMouseDown();
			}
		}
	}

	private void OnMouseUp()
	{
		if (_isClicked)
		{
			_isClicked = false;
			if (isFingerOnButton() && !Utils.IsOverUIElement())
			{
				_isShown = false;
				gameManager.ShowEndCard();
			}
		}
	}

	private void OnMouseDown()
	{
		if (!Utils.IsOverUIElement() && !_isClicked && isFingerOnButton())
		{
			_isClicked = true;
		}
	}

	private bool isFingerOnButton()
	{
		Ray ray = _gameCamera.ScreenPointToRay(Input.mousePosition);
		RaycastHit hitInfo;
		return Physics.Raycast(ray, out hitInfo, rayDistance, gameActionButtonLayerMask);
	}
}
