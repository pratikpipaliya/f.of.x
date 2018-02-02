#pragma strict
function Start () {
	transform.position = new Vector2(Random.Range(-2.5,2.5),Random.Range(-4.7,4.7));
}

function Change ()
{
        this.transform.position = new Vector2(Random.Range(-2.5,2.5),Random.Range(-4.7,4.7));
}