#pragma strict
public static var count : int;
var theSkin : GUISkin;
function Start () {
	count = 0;
}

function Point (yellow : int) {
	if(yellow == 1)
	{
		count++;
	}
}

function OnGUI ()
{
	GUI.skin = theSkin;
	GUI.Label (new Rect (Screen.width/2,100,100,100) , "" + count);
}