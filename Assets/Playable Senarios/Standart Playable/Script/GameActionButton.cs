using System;
using DG.Tweening;
using TMPro;
using UnityEngine;
using UnityEngine.UI;


public enum GameActionButtonType
{
    None = -1,
    Pass = 0,
    Gin = 1,
    Knock = 2,
}

//todo: better ux and effects

public class GameActionButton : MonoBehaviour
{

    public static GameActionButtonType GetActionButtonType(int value)
    {
        return value switch
        {
            -2 or > 10 => GameActionButtonType.None // For values -2 and >10
            ,
            -1 => GameActionButtonType.Pass // For -1
            ,
            0 => GameActionButtonType.Gin // For 0
            ,
            >= 1 and <= 10 => GameActionButtonType.Knock // For values 1-9
            ,
            _ => GameActionButtonType.None
        };
    }    
    
    [SerializeField] private LayerMask gameActionButtonLayerMask;
    [SerializeField] private float moveUpY, moveDownY;

    
    
    [SerializeField] private Texture textureGin, texturePass, textureKnock;
    [SerializeField] private MeshRenderer buttonMeshRenderer;
    [SerializeField] private Transform buttonTransform;
    [SerializeField] private TextMeshPro knockValueText;
    [SerializeField] private float rayDistance = 50f;
    
    
    [SerializeField] private SpriteRenderer shadowSpriteRenderer;
    [SerializeField] private Transform shadowTransform;

    [SerializeField] private SpriteRenderer frameSpriteRenderer;
    [SerializeField] private SpriteRenderer effectSpriteRenderer;
    private bool _isShown;
    private bool _isClicked;
    private Camera _gameCamera;
    private GameActionButtonType _lastType = GameActionButtonType.None;

    private void Start()
    {
        shadowSpriteRenderer.SetTransparency(0);
        frameSpriteRenderer.SetTransparency(0);
        effectSpriteRenderer.SetTransparency(0);
        _gameCamera = Camera.main;
    }

 
    public void Refresh(int buttonFlag)
    {
        //-2 or <10 none
        //-1 pass
        //0 gin
        //1-9 knock
        
        var type = GetActionButtonType(buttonFlag);
        knockValueText.gameObject.SetActive(type == GameActionButtonType.Knock);
        if (type == GameActionButtonType.Knock) knockValueText.text = buttonFlag.ToString();
        
        if (type == GameActionButtonType.None) Hide();
        else
        {
            SetButtonTexture(type);
            Show();
        }
        _lastType = type;
        
    }
    
    private Texture GetButtonTexture(GameActionButtonType type) =>
        type switch
        {
            GameActionButtonType.Gin => textureGin, GameActionButtonType.Knock => textureKnock,
            GameActionButtonType.Pass => texturePass, GameActionButtonType.None => null,
            _ => throw new ArgumentOutOfRangeException(nameof(type), type, null)
        };

    private void SetButtonTexture(GameActionButtonType type)
    {
        if(_lastType == type || type == GameActionButtonType.None) return;
        var matBlock = new MaterialPropertyBlock();
        var texture = GetButtonTexture(type);
        matBlock.SetTexture("_MainTex", texture);
        buttonMeshRenderer.SetPropertyBlock(matBlock, 0);
    }

    private void Show()
    {
        if (_isShown) return;
        _isShown = true;
        buttonTransform.localPosition =
            new Vector3(buttonTransform.localPosition.x, moveUpY, buttonTransform.localPosition.z);
        shadowSpriteRenderer.SetTransparency(.8f);
        frameSpriteRenderer.SetTransparency(.8f*.43f);

    }

    private void Hide()
    {
        if(!_isShown) return;
        _isShown = false;
        shadowSpriteRenderer.SetTransparency(0f);
        frameSpriteRenderer.SetTransparency(0f);
        buttonTransform.localPosition =
            new Vector3(buttonTransform.localPosition.x, moveDownY, buttonTransform.localPosition.z);    
    }
    
    private void Update()
    {
        if (!_isShown) return;
        if (Input.GetMouseButtonUp(0))
            OnMouseUp();
        if (Input.GetMouseButtonDown(0))
            OnMouseDown();
    }

    private void OnMouseUp()
    {
        if (!_isClicked) return;
        _isClicked = false;
        if (isFingerOnButton() && !Utils.IsOverUIElement())
        {
            _isShown = false;
            //todo: Go To store page
            return;
        }
    }
    
    private void OnMouseDown()
    {
        if (Utils.IsOverUIElement() || _isClicked  || !isFingerOnButton()) return;
        _isClicked = true;
    }
    private bool isFingerOnButton()
    {
        var ray = _gameCamera.ScreenPointToRay(Input.mousePosition);
        return (Physics.Raycast(ray, out _, rayDistance, gameActionButtonLayerMask));
    }

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // [Header("Animations")] [SerializeField]
    // private float duration;
    //
    // [SerializeField] private Ease upEase, downEase;
    // [SerializeField] private Transform shadow;
    // [SerializeField] private Transform effect;
    // [SerializeField] private SpriteRenderer effectRenderer;
    // [SerializeField] private Transform frame;
    //
    // [Header("Components")] [SerializeField]
    // private Camera gameCamera;
    //
    // [SerializeField] private LayerMask gameActionButtonsLayerMask;
    // [SerializeField] private TableManager gsm;
    //
    // [Header("Button Parts")] [SerializeField]
    // private GameObject buttonHolder;
    //
    // [SerializeField] private Collider boxCollider;
    // [SerializeField] private TextMeshPro knockValueText;
    // [SerializeField] private MeshRenderer buttonMeshRenderer;
    // [SerializeField] private Texture textureGin, texturePass, textureKnock;
    // [SerializeField] private Color colorGin, colorPass, colorKnock;
    //
    // private float _rayDistance = 50f;
    // private RaycastHit _hit;
    // private int _lastKnockValue;
    // private bool _isClicked;
    // private Sequence _buttonSequence;
    // private MaterialPropertyBlock _matBlock;
    //
    // private const float DownYPosition = -0.62f;
    // private const float UpYPosition = 0f;
    // private Vector3 _shadowUpscale = new Vector3(2.2f, 2.2f, 2.2f);
    // private Vector3 _shadowDownscale = new Vector3(1.8f, 1.8f, 1.8f);
    // private Vector3 _effectUpscale = Vector3.one;
    // private Vector3 _effectDownscale = new Vector3(1.35f, 1.35f, 1.35f);
    // private readonly float _effectDuration = .1f;
    //
    // public GameActionButtonType LastSelectedType { get; set; } = GameActionButtonType.None;
    //
    // Texture ButtonTexture(GameActionButtonType type) =>
    //     type switch
    //     {
    //         GameActionButtonType.Gin => textureGin, GameActionButtonType.Knock => textureKnock,
    //         GameActionButtonType.Pass => texturePass, GameActionButtonType.None => null,
    //         _ => throw new ArgumentOutOfRangeException(nameof(type), type, null)
    //     };
    //
    // Color ButtonColor(GameActionButtonType type) =>
    //     type switch { GameActionButtonType.Gin => colorGin, GameActionButtonType.Knock => colorKnock, GameActionButtonType.Pass => colorPass,
    //         GameActionButtonType.None => colorKnock,
    //         _ => throw new ArgumentOutOfRangeException(nameof(type), type, null)
    //     };
    //
    // public void ShowGin() => Setup(GameActionButtonType.Gin);
    // public void ShowKnock(int knockValue) => Setup(GameActionButtonType.Knock, knockValue);
    // public void ShowPass() => Setup(GameActionButtonType.Pass);
    // public void ShowNone() => Setup(GameActionButtonType.None);
    //
    // private void ButtonVisible(bool isVisible)
    // {
    //     buttonHolder.SetActive(isVisible);
    //     boxCollider.enabled = isVisible;
    //     effect.gameObject.SetActive(isVisible);
    //     shadow.gameObject.SetActive(isVisible);
    //     frame.gameObject.SetActive(isVisible);
    // }
    //
    // private void Setup(GameActionButtonType type, int knockValue = 0)
    // {
    //     if (type == GameActionButtonType.None)
    //     {
    //         LastSelectedType = GameActionButtonType.None;
    //         ButtonVisible(false);
    //         return;
    //     }
    //
    //     if (LastSelectedType == type && _lastKnockValue == knockValue) return;
    //
    //     _lastKnockValue = knockValue;
    //     LastSelectedType = type;
    //     knockValueText.text = type == GameActionButtonType.Knock ? knockValue.ToString() : string.Empty;
    //     _matBlock = new MaterialPropertyBlock();
    //     var texture = ButtonTexture(type);
    //     _matBlock.SetTexture("_MainTex", texture);
    //     buttonMeshRenderer.SetPropertyBlock(_matBlock, 0);
    //     effectRenderer.color = ButtonColor(type);
    //     ButtonVisible(true);
    //
    //     effect.localScale = Vector3.one;
    //     shadow.localScale = _shadowUpscale;
    //     effect.gameObject.SetActive(true);
    //     shadow.gameObject.SetActive(true);
    //     frame.gameObject.SetActive(true);
    //     _buttonSequence = ButtonMovement(up: true, force: true);
    // }
    //
    // private void Update()
    // {
    //     MouseDown();
    //     MouseUp();
    // }
    //
    // private bool isFingerOnButton()
    // {
    //     var ray = gameCamera.ScreenPointToRay(Input.mousePosition);
    //     return (Physics.Raycast(ray, out _hit, _rayDistance, gameActionButtonsLayerMask));
    // }
    //
    // private void MouseDown()
    // {
    //     if (Utils.IsOverUIElement() || _isClicked || !Input.GetMouseButtonDown(0) || _buttonSequence.isAlive) return;
    //     if (isFingerOnButton())
    //     {
    //         _isClicked = true;
    //         _buttonSequence = ButtonMovement(up: false);
    //     }
    // }
    //
    // private void MouseUp()
    // {
    //     if (Input.GetMouseButtonUp(0))
    //     {
    //         if (!_isClicked) return;
    //         _isClicked = false;
    //
    //         if (isFingerOnButton() && !Utils.IsOverUIElement())
    //             OnClickGameActionButton();
    //         else
    //             _buttonSequence = ButtonMovement(up: true);
    //     }
    // }
    //
    // private void OnClickGameActionButton()
    // {
    //     if (LastSelectedType == GameActionButtonType.Pass) gsm.SendPass();
    //     else gsm.SendFinish(gsm.cardLayer.handController.handCardList);
    //
    //     if (!_buttonSequence.isAlive)
    //     {
    //         _buttonSequence = ButtonMovement(up: true);
    //     }
    //     
    //     AudioManager.PlaySoundEffect(AudioManager.Sounds().ButtonClick);
    //     _buttonSequence.OnComplete(() =>
    //     {
    //         ButtonVisible(false); 
    //     });
    // }
    //
    // private Sequence ButtonMovement(bool up, bool setInitialPosition = true, bool force = false)
    // {
    //     var sequence = Sequence.Create();
    //     var initialPositionY = up ? DownYPosition : UpYPosition;
    //     var targetPositionY = up ? UpYPosition : DownYPosition;
    //     var initialPosition = buttonHolder.transform.localPosition = new Vector3(buttonHolder.transform.localPosition.x,
    //         initialPositionY,
    //         buttonHolder.transform.localPosition.z);
    //     var targetPosition = buttonHolder.transform.localPosition = new Vector3(buttonHolder.transform.localPosition.x,
    //         targetPositionY,
    //         buttonHolder.transform.localPosition.z);
    //     var shadowScale = up ? _shadowUpscale : _shadowDownscale;
    //     var effectScale = up ? _effectUpscale : _effectDownscale;
    //
    //     if (setInitialPosition)
    //     {
    //         //todo scale vs idle haline getir
    //         buttonHolder.transform.localPosition = initialPosition;
    //         effect.localScale = effectScale;
    //         shadow.localScale = shadowScale;
    //     }
    //
    //     if (force)
    //     {
    //         buttonHolder.transform.localPosition = targetPosition;
    //         return sequence;
    //     }
    //
    //     var targetEase = up ? upEase : downEase;
    //     sequence.Group(Tween.LocalPositionY(buttonHolder.transform, targetPositionY, duration, targetEase));
    //     sequence.Group(Tween.Scale(effect, effectScale, _effectDuration, targetEase));
    //     sequence.Group(Tween.Scale(shadow, shadowScale, _effectDuration, targetEase));
    //     return sequence;
    // }
}