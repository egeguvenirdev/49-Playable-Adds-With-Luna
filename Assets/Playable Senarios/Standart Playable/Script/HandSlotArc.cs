using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class HandSlotArc : MonoBehaviour
{
    [SerializeField] private HandSettingsSO handSettingsSo;
      #region  SlotCache
    private readonly List<SlotInfos> _cachedSlots = new();
    public void CacheSlots()
    {
        if (_cachedSlots.Count > 0) return;
        for (var j = 0; j < 3; j++)
        {
            var slotInfo = new SlotInfos
            {
                SlotPositions = new List<Vector3>(),
                SlotRotationsZAngle = new List<float>()
            };
            var width = handSettingsSo.handWidth;
            var height = handSettingsSo.handHeight;
            var maxCardAngle = handSettingsSo.maxCardAngle;
            var yPerCard = handSettingsSo.yPerCard;
            var zDistance = handSettingsSo.zDistance;
    
            var radius = Mathf.Abs(height) < 0.001f
                ? width * width / 0.001f * Mathf.Sign(height) 
                : height / 2f + width * width / (8f * height);

            var angle = 2f * Mathf.Asin(0.5f * width / radius) * Mathf.Rad2Deg;
            var count = 9 + j;
            angle = Mathf.Sign(angle) * Mathf.Min(Mathf.Abs(angle), maxCardAngle * (count - 1));
            var cardAngle = count == 1 ? 0f : angle / (count - 1f);

            for (var i = 0; i < count; i++)
            {
                var position = new Vector3(0f, radius, 0f);
                position = Quaternion.Euler(0f, 0f, angle / 2f - cardAngle * i) * position;
                position.y += height - radius;
                position += i * new Vector3(0f, yPerCard, zDistance);
                slotInfo.SlotPositions.Add(position);
                slotInfo.SlotRotationsZAngle.Add(angle / 2f - cardAngle * i);
            }
            _cachedSlots.Add(slotInfo);
        }
    }
    public struct SlotInfos
    {
        public List<Vector3> SlotPositions;
        public List<float> SlotRotationsZAngle;
    }
    
    public Vector3 GetSlotPosition(int slotCount,int index, bool worldPosition = false)
    {
        var cachedSlotIndex = slotCount - 9;
        if (cachedSlotIndex < 0 || cachedSlotIndex > _cachedSlots.Count - 1)
            cachedSlotIndex = _cachedSlots.Count - 1;
        if (index > _cachedSlots[cachedSlotIndex].SlotPositions.Count - 1) index = _cachedSlots[cachedSlotIndex].SlotPositions.Count - 1;
        if (index < 0) index = 0;
        return worldPosition ? transform.TransformPoint(_cachedSlots[cachedSlotIndex].SlotPositions[index]) : _cachedSlots[cachedSlotIndex].SlotPositions[index];
    } 
    public float GetSlotRotationZ(int slotCount,int index)
    {
        var cachedSlotIndex = slotCount - 9;
        if (cachedSlotIndex < 0 || cachedSlotIndex > _cachedSlots.Count - 1)
            cachedSlotIndex = _cachedSlots.Count - 1;
        if (index > _cachedSlots[cachedSlotIndex].SlotRotationsZAngle.Count - 1) index = _cachedSlots[cachedSlotIndex].SlotRotationsZAngle.Count - 1;
        if (index < 0) index = 0;
        return _cachedSlots[cachedSlotIndex].SlotRotationsZAngle[index];
    }
    #endregion
}
