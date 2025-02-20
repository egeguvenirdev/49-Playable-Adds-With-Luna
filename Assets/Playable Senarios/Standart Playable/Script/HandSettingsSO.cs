using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "HandSettings", menuName = "Ginrummy Extra/HandSettings")]
public class HandSettingsSO : ScriptableObject
{
    public float handHeight = 0.07f;
    public float handWidth = 3f;
    [Range(0f, 90f)] public float maxCardAngle = 5f;
    public float yPerCard;
    public float zDistance;
    public float handY, handZ;
}