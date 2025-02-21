using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public static class Utils
{
	public static void Swap<T>(this List<T> list, int indexA, int indexB)
	{
		T val = list[indexB];
		T val2 = list[indexA];
		T val4 = (list[indexA] = val);
		val4 = (list[indexB] = val2);
	}

	public static bool IsOverUIElement()
	{
		return (Input.touchCount > 0 && EventSystem.current.IsPointerOverGameObject(Input.GetTouch(0).fingerId)) || EventSystem.current.IsPointerOverGameObject();
	}
}
