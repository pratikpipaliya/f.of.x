#pragma strict

public function GoGame ()
{
	SceneManagement.SceneManager.LoadScene("MainGame");
}

public function quit()
{
	Application.Quit();
}

public function Option ()
{
	SceneManagement.SceneManager.LoadScene("MainGame");
}