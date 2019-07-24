/* STARTING CODE */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * Math.floor(max - min)) + min;
}

var randomInt = getRandomInt(1, 100);
/* END STARTING CODE */

var userInput = "";
var done = false;
var i = 0;

while (!done)
{
	i++;

	userInput = parseInt(prompt("Please guess a number"));

	if (userInput > randomInt)
	{
		alert("Your number is too high");
	}

	else if (userInput < randomInt)
	{
		alert("Your number is too low");
	}

	else if (userInput == randomInt)
	{
		alert("Conratulation! you guessed the number with only " + i + " tries!");
	}

	else
	{
		alert("Invalid input");
	}
}