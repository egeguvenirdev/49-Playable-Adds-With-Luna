using System.Linq;
using UnityEngine;
using UnityEngine.UI;

public static class UIExtensions
{
	public static void SetTransparency(this Component pComponent, float pTransparency)
	{
		if (!pComponent)
		{
			return;
		}
		if (!(pComponent is Image image))
		{
			if (pComponent is SpriteRenderer spriteRenderer)
			{
				spriteRenderer.color = new Color(spriteRenderer.color.r, spriteRenderer.color.g, spriteRenderer.color.b, pTransparency);
			}
		}
		else
		{
			image.color = new Color(image.color.r, image.color.g, image.color.b, pTransparency);
		}
	}

	public static void SetAnchoredPosition(this RectTransform pRectTransform, float? x = null, float? y = null)
	{
		if (!(pRectTransform == null))
		{
			Vector2 anchoredPosition = pRectTransform.anchoredPosition;
			if (x.HasValue)
			{
				anchoredPosition.x = x.Value;
			}
			if (y.HasValue)
			{
				anchoredPosition.y = y.Value;
			}
			pRectTransform.anchoredPosition = anchoredPosition;
		}
	}

	public static void SetSizeDelta(this RectTransform pRectTransform, float? width = null, float? height = null)
	{
		if (!(pRectTransform == null))
		{
			Vector2 sizeDelta = pRectTransform.sizeDelta;
			if (width.HasValue)
			{
				sizeDelta.x = width.Value;
			}
			if (height.HasValue)
			{
				sizeDelta.y = height.Value;
			}
			pRectTransform.sizeDelta = sizeDelta;
		}
	}

	public static int ActiveChildCount(this Transform parent)
	{
		return parent.Cast<Transform>().Count((Transform child) => child.gameObject.activeSelf);
	}

	public static void TranslatePosition(this Transform pTransform, float? x = null, float? y = null, float? z = null)
	{
		if (!(pTransform == null))
		{
			Vector3 localPosition = pTransform.localPosition;
			if (x.HasValue)
			{
				localPosition.x = x.Value;
			}
			if (y.HasValue)
			{
				localPosition.y = y.Value;
			}
			if (z.HasValue)
			{
				localPosition.z = z.Value;
			}
			pTransform.localPosition = localPosition;
		}
	}
}
