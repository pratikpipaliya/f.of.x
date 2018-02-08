#pragma strict
var rb : Rigidbody2D;
var initial : float[,] = new float[4,2];
var n : int;
var speedY : float;
var speedX : float;
var b : float;
function Start () {
	rb = GetComponent.<Rigidbody2D>();
	n = Mathf.Floor(Random.value * 4);
	initial[0,0] = -9.3f;
	initial[0,1] = Random.Range(-4.7,4.7);
	initial[1,0] = 9.3f;
	initial[1,1] = Random.Range(-4.7,4.7);
	initial[2,0] = Random.Range(-8.5,8.5);
	initial[2,1] = -5.3f;
	initial[3,0] = Random.Range(-8.5,8.5);
	initial[3,1] = 5.3f;
	setSpeed();
}

function Update () {
	if(transform.position.x >9.5 || transform.position.y>5.7 || transform.position.x<(-9.5) || transform.position.y<(-5.7))
	{
	initial[0,0] = -9.3f;
	initial[0,1] = Random.Range(-4.7,4.7);
	initial[1,0] = 9.3f;
	initial[1,1] = Random.Range(-4.7,4.7);
	initial[2,0] = Random.Range(-8.5,8.5);
	initial[2,1] = -5.3f;
	initial[3,0] = Random.Range(-8.5,8.5);
	initial[3,1] = 5.3f;
		n = Mathf.Floor(Random.value * 4);
		setSpeed();
	}
	if(n == 0 || n ==1)
	{
		rb.velocity.y = Mathf.Cos(transform.position.x*2)*3+transform.position.x;
	}
	else 
	{
		rb.velocity.x = Mathf.Cos(transform.position.y*2)*3+transform.position.y;
	}
}

function setSpeed()
{
	switch(n){
	case 0:
		speedY = Random.Range(-3,3)-initial[n,1]*(1.5f)/(4.7f);  
		transform.position = new Vector2(initial[n,0],initial[n,1]);
		b = (Mathf.Sqrt(81-4*speedY*speedY)-3)/2;
		rb.velocity = Vector2 ((3+b),speedY);
		break;
	case 1:
		speedY = Random.Range(-3,3)-initial[n,1]*(1.5f)/(4.7f);
		transform.position = new Vector2(initial[n,0],initial[n,1]);
		b = (Mathf.Sqrt(81-4*speedY*speedY)-3)/2;
		rb.velocity = Vector2 ((-3-b),speedY);
		break;
	case 2:
		speedX = Random.Range(-3,3)-initial[n,0]*(1.5f)/(8.5f);
		transform.position = new Vector2(initial[n,0],initial[n,1]);
		b = (Mathf.Sqrt(81-4*speedX*speedX)-3)/2;
		rb.velocity = Vector2 (speedX,(3+b));
		break;
	default:
		speedX = Random.Range(-3,3)-initial[n,0]*(1.5f)/(8.5f);
		transform.position = new Vector2(initial[n,0],initial[n,1]);
		b = (Mathf.Sqrt(81-4*speedX*speedX)-3)/2;
		rb.velocity = Vector2 (speedX,(-3-b));
	}
}