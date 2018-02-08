#pragma strict
public static var count : int;
public static var life : int;
var theSkin : GUISkin;
function Start () {
	count = 0;
	life = 3;
	aud = GetComponent.<AudioSource>();
}
var aud : AudioSource;

function Point (yellow : int) {
	if(yellow == 1)
	{
		count++;
		aud.Play();
	}
}

function Reduce () {
	life -= 1;
	if(life == 0)
	SceneManagement.SceneManager.LoadScene("GameMenu");
}

function OnGUI ()
{
	GUI.skin = theSkin;
	GUI.Label (new Rect (Screen.width/2+100,50,100,100) , "" + count);
	GUI.Label (new Rect (Screen.width/2-100,50,100,100) , "" + life);
}