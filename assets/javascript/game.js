//initial variables
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersGuessed = ""; //store letters already guessed
var guessesLeft = 9;
var wins = 0;
var losses = 0;
var letterToGuess;

//functions
//generate random letter
var randomLetter = function () {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
    document.write("I have made my choice");
}

var guesssesLeft = function () {
  guessesLeft--;
  document.getElementById("guesses-left").textHTML = guessesLeft;
}

var wins = function () {
  wins++;
  document.getElementById("wins").textHTML = wins;
}

var losses = function () {
  losses++;
  document.getElementById("losses").textHTML = losses;
}

var lettersGuessed = function () {
  document.onkeydown = event.key.toLowerCase();
  document.getElementById("letters-guessed").textHTML = lettersGuessed; 
  }

  if (lettersGuessed === letterToGuess) {
      wins();
  
  } else if (guessesLeft = 0) {
      // letter not guessed
      losses();

  } else {
      guesssesLeft();
  }
   

// Main - Page Load
//indicate html will change for guesses left
//update letter to guess
lettersGuessed();
randomLetter();











    //reset game function
    //reset guesses left to 9
    //reset guessed letters
    //functions:
      //guesses left
      //letter to guess
      //guesses so far
  //onkeydown function
    //decrement guessed left - countdown by 1 every time user hits a key
    //grab letter variable, set to whatever key was pushed
    //push new letter onto the guesses so far array
    //call update guesses left function
    //call update guesses so far function
    //check for a match - conditionals
    //if there is a match, increment the wins by 1
      //call reset function
      //change wins html
    //if guesses left = 0, increment losses by 1
      //change losses html

