using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Random = UnityEngine.Random;

public class PlayableTestManager : MonoBehaviour
{
    [LunaPlaygroundField("Amount of lives", 1, "Game Settings")]
    public int maxLives = 3;
    [LunaPlaygroundField("Test Dummy Parameter 1", 1, "Game Settings")]
    public int tes1 = 3;
    [LunaPlaygroundField("Test Dummy Parameter 2", 1, "Game Settings")]
    public int test2 = 3;

    [SerializeField] private float blastRadius = 10f;
    [SerializeField] private float forceMin = 30f;
    [SerializeField] private float forceMax = 60;
    [SerializeField] private int ballCount = 20;
    [SerializeField] private Transform forcePos;
    [SerializeField] private Transform instantiatePos;
    [SerializeField] private GameObject ball;
    private List<GameObject> balls = new List<GameObject>();

    private void Start()
    {
        Luna.Unity.LifeCycle.GameStarted(); //show end
        Luna.Unity.Analytics.LogEvent("SuccessfullyLoaded", 2);
    }

    public void InstantiateBalls()
    {
        if (maxLives > 0) StartCoroutine(InstantateRoutine());
        else ShowEnd();
    }

    public void ResetBalls()
    {
        Luna.Unity.Analytics.LogEvent("RemovedBalls", 1);
        for (int i = 0; i < balls.Count; i++)
        {
            if (balls[i] != null) Destroy(balls[i]);
        }

        balls.Clear();
        Luna.Unity.LifeCycle.GameUpdated();
    }

    private IEnumerator InstantateRoutine()
    {
        Luna.Unity.Analytics.LogEvent("InstantiatedBalls", 0);

        for (int i = 0; i < ballCount; i++)
        {
            GameObject instantiatedBall = Instantiate(ball,
                instantiatePos.position +
                new Vector3(Random.Range(0, 0.2f), Random.Range(0, 0.2f), Random.Range(0, 0.2f)),
                Quaternion.identity);
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
        Luna.Unity.Playable.InstallFullGame();
    }

    public void ShowEnd()
    {
        Luna.Unity.Analytics.LogEvent(Luna.Unity.Analytics.EventType.EndCardShown);
        Luna.Unity.LifeCycle.GameEnded(); //show end
    }
}