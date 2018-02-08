#pragma strict
var playspeed : float = 5.0f;
public var flag : int = 0;
var col : Collider2D;
public var score : GameObject;
var aud : AudioSource;
function Start()
{
	col = GetComponent.<Collider2D>();
	aud = GetComponent.<AudioSource>();
	score = GameObject.FindWithTag("game");
}
function Update()
	{
		flag = 0;
		if (Input.GetKey (KeyCode.LeftArrow)) {
			this.transform.Translate (new Vector2 (-playspeed * Time.deltaTime,0));
		}
		if (Input.GetKey (KeyCode.RightArrow)) {
			this.transform.Translate (new Vector2 (playspeed * Time.deltaTime,0));
		}
		if (Input.GetKey (KeyCode.UpArrow)) {
			this.transform.Translate ( new Vector2( 0,playspeed*Time.deltaTime ) );
		}
		if (Input.GetKey (KeyCode.DownArrow)) {
			this.transform.Translate ( new Vector2( 0,-playspeed*Time.deltaTime ) );
		}
		if(transform.position.x >= 9.3f || transform.position.x <= (-9.3f))
		{
			transform.position.x = -(transform.position.x);
		} 
		if(transform.position.y >= 5.3f || transform.position.y <= (-5.3f))
		{
			transform.position.y = -(transform.position.y);
		}
	}
function OnTriggerEnter2D (col : Collider2D)
	{
		if(col.tag == "orangedot")
		{
			flag = 1;
			score.SendMessage("Point",flag);
			col.SendMessage("Change");
		}
		if(col.tag == "reddot")
		{
			aud.Play();
			score.SendMessage("Reduce");
		}
	}