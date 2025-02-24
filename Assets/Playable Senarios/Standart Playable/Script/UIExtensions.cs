using System.Linq;
using UnityEngine;
using UnityEngine.UI;

public static class UIExtensions
{
    public static void SetTransparency(this Component pComponent, float pTransparency)
    {
        if (!pComponent) return;

        switch (pComponent)
        {
            case Image image:
                image.color = new Color(image.color.r, image.color.g, image.color.b, pTransparency);
                break;
            case SpriteRenderer spriteRenderer:
                spriteRenderer.color = new Color(spriteRenderer.color.r, spriteRenderer.color.g, spriteRenderer.color.b, pTransparency);
                break;
        }
    }

    public static void SetAnchoredPosition(this RectTransform pRectTransform, float? x = null, float? y = null)
    {
        if (pRectTransform == null) return;

        var anchoredPosition = pRectTransform.anchoredPosition;

        // Update X and/or Y if specified
        if (x.HasValue) anchoredPosition.x = x.Value;
        if (y.HasValue) anchoredPosition.y = y.Value;

        pRectTransform.anchoredPosition = anchoredPosition;
    }
    
    public static void SetSizeDelta(this RectTransform pRectTransform, float? width = null, float? height = null)
    {
        if (pRectTransform == null) return;

        var sizeDelta = pRectTransform.sizeDelta;

        // Update width and/or height if specified
        if (width.HasValue) sizeDelta.x = width.Value;
        if (height.HasValue) sizeDelta.y = height.Value;

        pRectTransform.sizeDelta = sizeDelta;
    }    
    
    public static int ActiveChildCount(this Transform parent)
    {
        return parent.Cast<Transform>().Count(child => child.gameObject.activeSelf);
    }

    public static void TranslatePosition(this Transform pTransform, float? x = null, float? y = null, float? z = null)
    {
        if(pTransform == null) return;
        var localPosition = pTransform.localPosition;
        if(x.HasValue) localPosition.x = x.Value;
        if(y.HasValue) localPosition.y = y.Value;
        if(z.HasValue) localPosition.z = z.Value;
        pTransform.localPosition = localPosition;
    }
    
    
}