using UnityEngine;

public enum CardSource
{
    None,
    Hand,
    Opponent,
    Deck,
    Throw,
    Melding,
    KnockOutDeck
}
public class Card : MonoBehaviour
{
    [SerializeField] private SpriteRenderer frontRenderer;
    [SerializeField] private SpriteRenderer backRenderer;
    [SerializeField] private SpriteRenderer shadowHandRenderer;
    [SerializeField] private SpriteRenderer shadowDeckRenderer;
    [SerializeField] private SpriteRenderer shadowThrowRenderer;
    [SerializeField] private SpriteRenderer shadowMeldingRenderer;
    [SerializeField] private SpriteRenderer shadowOutline;
    [SerializeField] private SpriteRenderer layOffOutline;
    [SerializeField] private GameObject container;
    [SerializeField] private Sprite[] sprites;
    private int _highlightNo = -1;
    [SerializeField] private SpriteRenderer highlightRenderer;
    [SerializeField] private Color[] highlightColors;
    [SerializeField] private Color blockedColor, nonBlockedColor;
    [SerializeField] private BoxCollider boxCollider;
    [SerializeField] private Color[] layOffColors;
    private bool _blocked = false;
    public Quaternion RandomRotationInThrow { get; set; } = Quaternion.Euler(Vector3.zero); // pick release pick release spamda sürekli farklı rotasyonlarda düşmesin diye
    //
    // private float _frontRendererAlpha;
    // private float _backRendererAlpha;
    // private float _shadowHandRendererAlpha;
    // private float _shadowDeckRendererAlpha;
    // private float _shadowThrowRendererAlpha;
    // private float _shadowMeldingRendererAlpha;
    // private float _shadowOutlineAlpha;
    //private bool _initialAlphaSet = false;
    private void Awake()
    {
        boxCollider = GetComponent<BoxCollider>();
        //if (_initialAlphaSet) return;
        //_initialAlphaSet = true;
        // _frontRendererAlpha = frontRenderer.color.a; 
        // _backRendererAlpha = backRenderer.color.a;
        // _shadowHandRendererAlpha = shadowHandRenderer.color.a;
        // _shadowDeckRendererAlpha = shadowDeckRenderer.color.a;
        // _shadowThrowRendererAlpha = shadowThrowRenderer.color.a;
        // _shadowMeldingRendererAlpha = shadowMeldingRenderer.color.a;
        // _shadowOutlineAlpha = shadowOutline.color.a;
    }
    
    public bool CanCollide
    {
        get => boxCollider.enabled;
        set => boxCollider.enabled = value;
    }
    public bool Blocked
    {
        set
        {
            _blocked = value;
            frontRenderer.color = _blocked ? blockedColor : nonBlockedColor;
        }
        get => _blocked;
    }
    public int HighlightNo
    {
        set
        {
            _highlightNo = value;
            var targetColor = new Color(1, 1, 1, 0);
            if (_highlightNo != -1) targetColor = highlightColors[_highlightNo];
            if (highlightRenderer is not null)
                highlightRenderer.color = targetColor;
        }
    }


    private CardSource _source = CardSource.None;

    
    public CardSource Source
    {
        get => _source;
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

    private int _sortingOrder;

    public int SortingOrder
    {
        get => _sortingOrder;
        set => _sortingOrder =
            frontRenderer.sortingOrder =
                backRenderer.sortingOrder = 
                    shadowHandRenderer.sortingOrder =
                        shadowDeckRenderer.sortingOrder = 
                            highlightRenderer.sortingOrder = 
                                shadowThrowRenderer.sortingOrder =
                                    shadowOutline.sortingOrder =
                                shadowMeldingRenderer.sortingOrder = 
                                    layOffOutline.sortingOrder = value;
    }
    
    private int _no;
    //private float _fade = 1f;

    public SpriteRenderer BackRenderer => backRenderer; // melding layoff fade verirken arkayı kapatmak icin gerekti
    // public float Fade
    // {
    //     get => _fade;
    //     set
    //     {
    //         _fade = value;
    //         frontRenderer.SetTransparency(_fade < _frontRendererAlpha ? _fade : _frontRendererAlpha);
    //         backRenderer.SetTransparency(_fade < _backRendererAlpha ? _fade : _backRendererAlpha);
    //         shadowHandRenderer.SetTransparency(_fade < _shadowHandRendererAlpha ? _fade : _shadowHandRendererAlpha);
    //         shadowDeckRenderer.SetTransparency(_fade < _shadowDeckRendererAlpha ? _fade : _shadowDeckRendererAlpha);
    //         shadowThrowRenderer.SetTransparency(_fade < _shadowThrowRendererAlpha ? _fade : _shadowThrowRendererAlpha);
    //         shadowMeldingRenderer.SetTransparency(_fade < _shadowMeldingRendererAlpha ? _fade : _shadowMeldingRendererAlpha);
    //         shadowOutline.SetTransparency(_fade < _shadowOutlineAlpha ? _fade : _shadowOutlineAlpha);
    //     }
    // }
    
    private int _layOff; // -1 => disable, 0 => myLyOffCard, 1 => oppLayOffCard (0 => my card goes to opponents slot)

    public int LayOff
    {
        get => _layOff;
        set
        {
            _layOff = value;
            layOffOutline.gameObject.SetActive(_layOff != -1);
            if (_layOff == -1) return;
            layOffOutline.color = layOffColors[_layOff];
        }
    }
    public int No
    {
        get => _no;
        set
        {
            _no = value;
            if (value < 0 || value >= sprites.Length) gameObject.SetActive(false);
            else frontRenderer.sprite = sprites[value];
        }
    }

    public void ResetCard()
    {
        RandomRotationInThrow = Quaternion.Euler(Vector3.zero);
        HighlightNo = -1;
        SortingOrder = 0;
       // Fade = 1;
        LayOff = -1;
        transform.localPosition = Vector3.zero;
        transform.localScale = Vector3.one;
        transform.localRotation = Quaternion.identity;
        gameObject.SetActive(false);
        Blocked = false;
    }
}