using Luna.Unity;
using UnityEngine;

public class GameManager : MonoBehaviour
{
	[SerializeField]
	private GameObject playCanvas;

	[SerializeField]
	private GameObject endCanvas;

	public void ShowEndCard()
	{
		endCanvas.SetActive(true);
		playCanvas.SetActive(false);
		Analytics.LogEvent(Analytics.EventType.EndCardShown);
		LifeCycle.GameEnded();
	}

	public void InstallGame()
	{
		Playable.InstallFullGame();
	}
}
