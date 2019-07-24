/* Checks if a character is a letter */
function isLetter(char) {
    char = char.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".indexOf(char) >= 0;
}

function isPalindrom(string)
{
	string = string.replace(/[^0-9a-z]/gi, '');  // removes non letter, credit: https://stackoverflow.com/questions/9364400/remove-not-alphanumeric-characters-from-string-having-trouble-with-the-char

	list = string.split("");
	revString = list.reverse().join("");

	return string == revString;
}
	
var userInput = prompt("Please enter a palindrom:");

if (isPalindrom(userInput))
{
	console.log("It is a palindrom!");
	alert("It is a palindrom!");
}

else
{
	console.log("It is a not palindrom...");
	alert("It is not a palindrom...");
}