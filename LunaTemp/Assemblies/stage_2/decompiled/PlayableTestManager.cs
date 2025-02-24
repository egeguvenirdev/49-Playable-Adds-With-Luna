using System.Collections;
using System.Collections.Generic;
using Luna.Unity;
using UnityEngine;

public class PlayableTestManager : MonoBehaviour
{
	[LunaPlaygroundField("Amount of lives", 1, "Game Settings", false, null)]
	public int maxLives = 3;

	[LunaPlaygroundField("Test Dummy Parameter 1", 1, "Game Settings", false, null)]
	public int tes1 = 3;

	[LunaPlaygroundField("Test Dummy Parameter 2", 1, "Game Settings", false, null)]
	public int test2 = 3;

	[SerializeField]
	private float blastRadius = 10f;

	[SerializeField]
	private float forceMin = 30f;

	[SerializeField]
	private float forceMax = 60f;

	[SerializeField]
	private int ballCount = 20;

	[SerializeField]
	private Transform forcePos;

	[SerializeField]
	private Transform instantiatePos;

	[SerializeField]
	private GameObject ball;

	private List<GameObject> balls = new List<GameObject>();

	private void Start()
	{
		LifeCycle.GameStarted();
		Analytics.LogEvent("SuccessfullyLoaded", 2);
	}

	public void InstantiateBalls()
	{
		if (maxLives > 0)
		{
			StartCoroutine(InstantateRoutine());
		}
		else
		{
			ShowEnd();
		}
	}

	public void ResetBalls()
	{
		Analytics.LogEvent("RemovedBalls", 1);
		for (int i = 0; i < balls.Count; i++)
		{
			if (balls[i] != null)
			{
				Object.Destroy(balls[i]);
			}
		}
		balls.Clear();
		LifeCycle.GameUpdated();
	}

	private IEnumerator InstantateRoutine()
	{
		Analytics.LogEvent("InstantiatedBalls", 0);
		for (int i = 0; i < ballCount; i++)
		{
			GameObject instantiatedBall = Object.Instantiate(ball, instantiatePos.position + new Vector3(Random.Range(0f, 0.2f), Random.Range(0f, 0.2f), Random.Range(0f, 0.2f)), Quaternion.identity);
			balls.Add(instantiatedBall);
			Rigidbody rb = instantiatedBall.GetComponent<Rigidbody>();
			if (rb != null)
			{
				rb.AddExplosionForce(Random.Range(forceMin, forceMax), forcePos.position, blastRadius);
			}
			yield return new WaitForSeconds(0.05f);
		}
	}

	public void InstallFullGame()
	{
	}

	public void ShowEnd()
	{
		Analytics.LogEvent(Analytics.EventType.EndCardShown);
		LifeCycle.GameEnded();
	}
}
