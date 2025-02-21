using UnityEngine;

public class Card : MonoBehaviour
{
	[SerializeField]
	private SpriteRenderer frontRenderer;

	[SerializeField]
	private SpriteRenderer backRenderer;

	[SerializeField]
	private SpriteRenderer shadowHandRenderer;

	[SerializeField]
	private SpriteRenderer shadowDeckRenderer;

	[SerializeField]
	private SpriteRenderer shadowThrowRenderer;

	[SerializeField]
	private SpriteRenderer shadowMeldingRenderer;

	[SerializeField]
	private SpriteRenderer shadowOutline;

	[SerializeField]
	private SpriteRenderer layOffOutline;

	[SerializeField]
	private GameObject container;

	[SerializeField]
	private Sprite[] sprites;

	private int _highlightNo = -1;

	[SerializeField]
	private SpriteRenderer highlightRenderer;

	[SerializeField]
	private Color[] highlightColors;

	[SerializeField]
	private Color blockedColor;

	[SerializeField]
	private Color nonBlockedColor;

	[SerializeField]
	private BoxCollider boxCollider;

	[SerializeField]
	private Color[] layOffColors;

	private bool _blocked = false;

	private CardSource _source = CardSource.None;

	private int _sortingOrder;

	private int _no;

	private int _layOff;

	public Quaternion RandomRotationInThrow { get; set; } = Quaternion.Euler(Vector3.zero);


	public bool CanCollide
	{
		get
		{
			return boxCollider.enabled;
		}
		set
		{
			boxCollider.enabled = value;
		}
	}

	public bool Blocked
	{
		get
		{
			return _blocked;
		}
		set
		{
			_blocked = value;
			frontRenderer.color = (_blocked ? blockedColor : nonBlockedColor);
		}
	}

	public int HighlightNo
	{
		set
		{
			_highlightNo = value;
			Color targetColor = new Color(1f, 1f, 1f, 0f);
			if (_highlightNo != -1)
			{
				targetColor = highlightColors[_highlightNo];
			}
			if ((object)highlightRenderer != null)
			{
				highlightRenderer.color = targetColor;
			}
		}
	}

	public CardSource Source
	{
		get
		{
			return _source;
		}
		set
		{
			shadowDeckRenderer.gameObject.SetActive(value == CardSource.Deck);
			shadowHandRenderer.gameObject.SetActive(value == CardSource.Hand);
			shadowThrowRenderer.gameObject.SetActive(value == CardSource.Throw);
			shadowOutline.gameObject.SetActive(value == CardSource.KnockOutDeck);
			shadowMeldingRenderer.gameObject.SetActive(value == CardSource.Melding);
			_source = value;
		}
	}

	public int SortingOrder
	{
		get
		{
			return _sortingOrder;
		}
		set
		{
			SpriteRenderer spriteRenderer = frontRenderer;
			SpriteRenderer spriteRenderer2 = backRenderer;
			SpriteRenderer spriteRenderer3 = shadowHandRenderer;
			SpriteRenderer spriteRenderer4 = shadowDeckRenderer;
			SpriteRenderer spriteRenderer5 = highlightRenderer;
			SpriteRenderer spriteRenderer6 = shadowThrowRenderer;
			SpriteRenderer spriteRenderer7 = shadowOutline;
			SpriteRenderer spriteRenderer8 = shadowMeldingRenderer;
			int num2 = (layOffOutline.sortingOrder = value);
			int num4 = (spriteRenderer8.sortingOrder = num2);
			int num6 = (spriteRenderer7.sortingOrder = num4);
			int num8 = (spriteRenderer6.sortingOrder = num6);
			int num10 = (spriteRenderer5.sortingOrder = num8);
			int num12 = (spriteRenderer4.sortingOrder = num10);
			int num14 = (spriteRenderer3.sortingOrder = num12);
			int num16 = (spriteRenderer2.sortingOrder = num14);
			int num18 = (_sortingOrder = (spriteRenderer.sortingOrder = num16));
		}
	}

	public SpriteRenderer BackRenderer => backRenderer;

	public int LayOff
	{
		get
		{
			return _layOff;
		}
		set
		{
			_layOff = value;
			layOffOutline.gameObject.SetActive(_layOff != -1);
			if (_layOff != -1)
			{
				layOffOutline.color = layOffColors[_layOff];
			}
		}
	}

	public int No
	{
		get
		{
			return _no;
		}
		set
		{
			_no = value;
			if (value < 0 || value >= sprites.Length)
			{
				base.gameObject.SetActive(false);
			}
			else
			{
				frontRenderer.sprite = sprites[value];
			}
		}
	}

	private void Awake()
	{
		boxCollider = GetComponent<BoxCollider>();
	}

	public void ResetCard()
	{
		RandomRotationInThrow = Quaternion.Euler(Vector3.zero);
		HighlightNo = -1;
		SortingOrder = 0;
		LayOff = -1;
		base.transform.localPosition = Vector3.zero;
		base.transform.localScale = Vector3.one;
		base.transform.localRotation = Quaternion.identity;
		base.gameObject.SetActive(false);
		Blocked = false;
	}
}
