//initial variables
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersPressed;
var lettersGuessed = []; //store letters already guessed
var guessesLeft = 9;
var wins = 0;
var losses = 0;
var letterToGuess = "";

//generate random letter
function randomLetter() {
  for (i = 0; i < letters.length; i++) {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
  }
  alert("I have made my choice");
  console.log(letterToGuess)
}
document.onkeydown = function () {
  lettersPressed = String.fromCharCode(event.keyCode).toLowerCase();
  lettersGuessed.push(lettersPressed);
  document.getElementById("letters-guessed").innerHTML = lettersGuessed;
  if (lettersPressed === letterToGuess) {
    wins++;
    document.getElementById("wins").innerHTML = wins;
    gameReset();
  } else if (guessesLeft === 0) {
    losses++;
    document.getElementById("losses").innerHTML = losses;
    gameReset();
  } else {
    guessesLeft--;
    document.getElementById("guesses-left").innerHTML = guessesLeft;
  }
}

//game reset
function gameReset() {
  lettersGuessed = [];
  guessesLeft = 9;
  randomLetter();
}

//on page load
randomLetter();