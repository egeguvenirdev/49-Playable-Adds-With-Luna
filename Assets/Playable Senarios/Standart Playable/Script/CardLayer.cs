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
       public enum Ease
    {
        Linear,
        InQuad,
        OutQuad,
        InOutQuad,
        InCubic,
        OutCubic,
        InOutCubic,
        InQuart,
        OutQuart,
        InOutQuart,
        InQuint,
        OutQuint,
        InOutQuint,
        InSine,
        OutSine,
        InOutSine,
        InExpo,
        OutExpo,
        InOutExpo,
        InCirc,
        OutCirc,
        InOutCirc,
        InBack,
        OutBack,
        InOutBack
    }
    
    public IEnumerator UpdatePosition(Transform target, Vector3? targetPosition = null,
        Quaternion? targetRotation = null, Vector3? targetScale =null ,
        float duration = 1f, Ease ease = Ease.Linear, float delay = 0f, bool force = false, bool ignorePosition = false, bool ignoreRotation = false, bool ignoreScale = false, 
        bool ignoreConditions = false, bool isLocal = true)
    {
        targetPosition ??= Vector3.zero;
        targetRotation ??= Quaternion.Euler(Vector3.zero);
        targetScale ??= Vector3.one;
        if (force)
        {
            if (isLocal)
            {
                target.transform.localPosition = targetPosition.Value;
                target.transform.localRotation = targetRotation.Value;
            }
            else
            {
                target.transform.position = targetPosition.Value;
                target.transform.rotation = targetRotation.Value;
            }
        }
        else
        {
            var elapsedTime = 0f;
            var cardRotation = isLocal ? target.transform.localRotation : target.transform.rotation;
            var cardPosition = isLocal ? target.transform.localPosition : target.transform.position;
            var cardScale = target.transform.localScale;
            while (elapsedTime < duration)
            {
                elapsedTime += Time.deltaTime;
                var t = elapsedTime / duration;
                t = ApplyEase(t, ease);
                if (isLocal)
                {
                    if (!ignorePosition)
                        target.transform.localPosition = Vector3.Lerp(cardPosition, targetPosition.Value, t);
                    if (!ignoreRotation)
                        target.transform.localRotation = Quaternion.Lerp(cardRotation, targetRotation.Value, t);
                }
                else
                {
                    if (!ignorePosition)
                        target.transform.position = Vector3.Lerp(cardPosition, targetPosition.Value, t);
                    if (!ignoreRotation)
                        target.transform.rotation = Quaternion.Lerp(cardRotation, targetRotation.Value, t);
                }
                if (!ignoreScale)
                    target.transform.localScale = Vector3.Lerp(cardScale, targetScale.Value, t);

                yield return null;
            }
            // target.transform.localPosition = targetPosition.Value;
            // target.transform.localRotation = targetRotation.Value;
        }
        // target.transform.localScale = targetScale.Value;
    }
  
    private static float ApplyEase(float t, Ease ease)
    {
        switch (ease)
        {
            case Ease.Linear:
                return t;

            case Ease.InQuad:
                return t * t;

            case Ease.OutQuad:
                return 1 - (1 - t) * (1 - t);

            case Ease.InOutQuad:
                return t < 0.5f ? 2 * t * t : 1 - Mathf.Pow(-2 * t + 2, 2) / 2;

            case Ease.InCubic:
                return t * t * t;

            case Ease.OutCubic:
                return 1 - Mathf.Pow(1 - t, 3);

            case Ease.InOutCubic:
                return t < 0.5f ? 4 * t * t * t : 1 - Mathf.Pow(-2 * t + 2, 3) / 2;

            case Ease.InQuart:
                return t * t * t * t;

            case Ease.OutQuart:
                return 1 - Mathf.Pow(1 - t, 4);

            case Ease.InOutQuart:
                return t < 0.5f ? 8 * t * t * t * t : 1 - Mathf.Pow(-2 * t + 2, 4) / 2;

            case Ease.InQuint:
                return t * t * t * t * t;

            case Ease.OutQuint:
                return 1 - Mathf.Pow(1 - t, 5);

            case Ease.InOutQuint:
                return t < 0.5f ? 16 * t * t * t * t * t : 1 - Mathf.Pow(-2 * t + 2, 5) / 2;

            case Ease.InSine:
                return 1 - Mathf.Cos((t * Mathf.PI) / 2);

            case Ease.OutSine:
                return Mathf.Sin((t * Mathf.PI) / 2);

            case Ease.InOutSine:
                return -(Mathf.Cos(Mathf.PI * t) - 1) / 2;

            case Ease.InExpo:
                return t == 0 ? 0 : Mathf.Pow(2, 10 * t - 10);

            case Ease.OutExpo:
                return Mathf.Approximately(t, 1) ? 1 : 1 - Mathf.Pow(2, -10 * t);

            case Ease.InOutExpo:
                return t == 0
                    ? 0
                    : Mathf.Approximately(t, 1)
                        ? 1
                        : t < 0.5
                            ? Mathf.Pow(2, 20 * t - 10) / 2
                            : (2 - Mathf.Pow(2, -20 * t + 10)) / 2;

            case Ease.InCirc:
                return 1 - Mathf.Sqrt(1 - Mathf.Pow(t, 2));

            case Ease.OutCirc:
                return Mathf.Sqrt(1 - Mathf.Pow(t - 1, 2));

            case Ease.InOutCirc:
                return t < 0.5
                    ? (1 - Mathf.Sqrt(1 - Mathf.Pow(2 * t, 2))) / 2
                    : (Mathf.Sqrt(1 - Mathf.Pow(-2 * t + 2, 2)) + 1) / 2;

            case Ease.InBack:
            {
                const float c1 = 1.70158f;
                const float c3 = c1 + 1;
                return c3 * t * t * t - c1 * t * t;
            }

            case Ease.OutBack:
            {
                const float c1 = 1.70158f;
                const float c3 = c1 + 1;
                return 1 + c3 * Mathf.Pow(t - 1, 3) + c1 * Mathf.Pow(t - 1, 2);
            }

            case Ease.InOutBack:
            {
                const float c1 = 1.70158f;
                const float c2 = c1 * 1.525f;

                return t < 0.5
                    ? (Mathf.Pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2)) / 2
                    : (Mathf.Pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2;
            }

            default:
                return t;
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
