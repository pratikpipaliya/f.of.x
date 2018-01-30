#pragma strict
var count : int;
function Start () {
	transform.position = new Vector2(Random.Range(-2.5,2.5),Random.Range(-4.7,4.7));
	count = 0;
}

function Update ()
{
	count += 1;
    if(count == 50)
    {
        count = 0;
        transform.position = new Vector2(Random.Range(-2.5,2.5),Random.Range(-4.7,4.7));
    }
}
