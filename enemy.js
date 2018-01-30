#pragma strict
var rb : Rigidbody2D;
var x : int;
var y : int;
var a : int;
var b : int;
var t : int;
function Start () {
	transform.position = new Vector2(Random.Range(-2.5,2.5),Random.Range(-4.7,4.7));
	rb = GetComponent.<Rigidbody2D>();
	x = Random.Range(-3,3);
	y = Random.Range(-3,3);
	t = 3/Mathf.Sqrt(2);
	if(x+a == 0){
	x=t;
	a=0;
	}
	if(y+b == 0){
	y=t;
	b=0;
	}
	a = x*(Mathf.Sqrt((9/(x*x+y*y)))-1);
	b = y*(Mathf.Sqrt((9/(x*x+y*y)))-1);
}

function Update () {
	rb.velocity = Vector2 (x+a,y+b);
	if(transform.position.x >3.5 || transform.position.y>5.7 || transform.position.x<(-3.5) || transform.position.y<(-5.7))
	{
	transform.position = new Vector2(Random.Range(-2.5,2.5),Random.Range(-4.7,4.7));
	x = Random.Range(-3,3);
	y = Random.Range(-3,3);
	a = x*(Mathf.Sqrt((9/(x*x+y*y)))-1);
	b = y*(Mathf.Sqrt((9/(x*x+y*y)))-1);
	}
	if(x+a ==0 && y+b == 0){
	//Debug.Log("hey");
	x=3;
	a=0;
	}
}
