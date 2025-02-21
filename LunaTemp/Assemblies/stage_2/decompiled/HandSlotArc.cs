using System.Collections.Generic;
using UnityEngine;

public class HandSlotArc : MonoBehaviour
{
	public struct SlotInfos
	{
		public List<Vector3> SlotPositions;

		public List<float> SlotRotationsZAngle;
	}

	[SerializeField]
	private HandSettingsSO handSettingsSo;

	private readonly List<SlotInfos> _cachedSlots = new List<SlotInfos>();

	public void CacheSlots()
	{
		if (_cachedSlots.Count > 0)
		{
			return;
		}
		for (int j = 0; j < 3; j++)
		{
			SlotInfos slotInfos = default(SlotInfos);
			slotInfos.SlotPositions = new List<Vector3>();
			slotInfos.SlotRotationsZAngle = new List<float>();
			SlotInfos slotInfo = slotInfos;
			float width = handSettingsSo.handWidth;
			float height = handSettingsSo.handHeight;
			float maxCardAngle = handSettingsSo.maxCardAngle;
			float yPerCard = handSettingsSo.yPerCard;
			float zDistance = handSettingsSo.zDistance;
			float radius = ((Mathf.Abs(height) < 0.001f) ? (width * width / 0.001f * Mathf.Sign(height)) : (height / 2f + width * width / (8f * height)));
			float angle = 2f * Mathf.Asin(0.5f * width / radius) * 57.29578f;
			int count = 9 + j;
			angle = Mathf.Sign(angle) * Mathf.Min(Mathf.Abs(angle), maxCardAngle * (float)(count - 1));
			float cardAngle = ((count == 1) ? 0f : (angle / ((float)count - 1f)));
			for (int i = 0; i < count; i++)
			{
				Vector3 position = new Vector3(0f, radius, 0f);
				position = Quaternion.Euler(0f, 0f, angle / 2f - cardAngle * (float)i) * position;
				position.y += height - radius;
				position += i * new Vector3(0f, yPerCard, zDistance);
				slotInfo.SlotPositions.Add(position);
				slotInfo.SlotRotationsZAngle.Add(angle / 2f - cardAngle * (float)i);
			}
			_cachedSlots.Add(slotInfo);
		}
	}

	public Vector3 GetSlotPosition(int slotCount, int index, bool worldPosition = false)
	{
		int cachedSlotIndex = slotCount - 9;
		if (cachedSlotIndex < 0 || cachedSlotIndex > _cachedSlots.Count - 1)
		{
			cachedSlotIndex = _cachedSlots.Count - 1;
		}
		if (index > _cachedSlots[cachedSlotIndex].SlotPositions.Count - 1)
		{
			index = _cachedSlots[cachedSlotIndex].SlotPositions.Count - 1;
		}
		if (index < 0)
		{
			index = 0;
		}
		return worldPosition ? base.transform.TransformPoint(_cachedSlots[cachedSlotIndex].SlotPositions[index]) : _cachedSlots[cachedSlotIndex].SlotPositions[index];
	}

	public float GetSlotRotationZ(int slotCount, int index)
	{
		int cachedSlotIndex = slotCount - 9;
		if (cachedSlotIndex < 0 || cachedSlotIndex > _cachedSlots.Count - 1)
		{
			cachedSlotIndex = _cachedSlots.Count - 1;
		}
		if (index > _cachedSlots[cachedSlotIndex].SlotRotationsZAngle.Count - 1)
		{
			index = _cachedSlots[cachedSlotIndex].SlotRotationsZAngle.Count - 1;
		}
		if (index < 0)
		{
			index = 0;
		}
		return _cachedSlots[cachedSlotIndex].SlotRotationsZAngle[index];
	}
}
