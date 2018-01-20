using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class playerMovements : MonoBehaviour {
	
	public float playspeed = 20.0f;

	void Update()
	{
		if (Input.GetKey (KeyCode.LeftArrow)) {
			Debug.Log ("LeftArrow key pressed.");
			this.transform.Translate (new Vector2 (-playspeed * Time.deltaTime,0));
		}
		if (Input.GetKey (KeyCode.RightArrow)) {
			Debug.Log ("RightArrow key pressed.");
			this.transform.Translate (new Vector2 (playspeed * Time.deltaTime,0));
		}
		if (Input.GetKey (KeyCode.UpArrow)) {
			Debug.Log ("UpArrow key pressed.");
			this.transform.Translate ( new Vector2( 0,playspeed*Time.deltaTime ) );
		}
		if (Input.GetKey (KeyCode.DownArrow)) {
			Debug.Log ("DownArrow key pressed.");
			this.transform.Translate ( new Vector2( 0,-playspeed*Time.deltaTime ) );
		}
	}
}
