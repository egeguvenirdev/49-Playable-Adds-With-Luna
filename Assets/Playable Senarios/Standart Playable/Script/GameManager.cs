using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameManager : MonoBehaviour
{
    [SerializeField] private GameObject playCanvas;
    [SerializeField] private GameObject endCanvas;

    public void ShowEndCard()
    {
        endCanvas.SetActive(true);
        playCanvas.SetActive(false);
        
        Luna.Unity.Analytics.LogEvent(Luna.Unity.Analytics.EventType.EndCardShown);
        Luna.Unity.LifeCycle.GameEnded(); //show end
    }

    public void InstallGame()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
}
