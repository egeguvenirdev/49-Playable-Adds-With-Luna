using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayableTestManager : MonoBehaviour
{
    [SerializeField] private float blastRadius = 10f;
    [SerializeField] private float forceMin = 30f;
    [SerializeField] private float forceMax = 60;
    [SerializeField] private int ballCount = 20;
    [SerializeField] private Transform forcePos;
    [SerializeField] private Transform instantiatePos;
    [SerializeField] private GameObject ball;
    private List<GameObject> balls = new List<GameObject>();

    public void InstantiateBalls()
    {
        StartCoroutine(InstantateRoutine());
    }

    public void ResetBalls()
    {
        for (int i = 0; i < balls.Count; i++)
        {
            if (balls[i] != null) Destroy(balls[i]);
        }

        balls.Clear();
    }

    private IEnumerator InstantateRoutine()
    {
        for (int i = 0; i < ballCount; i++)
        {
            GameObject instantiatedBall = Instantiate(ball, 
                instantiatePos.position + new Vector3(Random.Range(0,0.2f), Random.Range(0,0.2f), Random.Range(0,0.2f)),
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
}