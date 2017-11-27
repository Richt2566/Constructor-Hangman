
var hangmanWords = ["tank"];
var rand = Math.floor(Math.random()*hangmanWords.length);
var randomWord = hangmanWords[rand];

// require this to use word constructor
var Word = require("./word.js");

// constructor function to deal with letter properties
function Letter(char) {
	this.char = char;
	this.guessed = false;

	// i don't know. 
	this.doSomething = function() {

	}

	// an array that hold the correct letters
	this.correctLetters = [];

	this.revealLetterinSpot = function(char){
		this.char = char;
		var theWord = randomWord.split("");

		for (i in theWord){
			//if a letter matches the letter in the current word
			if (this.char === theWord[i]){

				//show letter in that particular spot
				this.correctLetters[i] = data.letters[i];
				console.log(this.correctLetters);
			}
		}
		
		
		//if the whole word equals what is being displayed
		if (theWord === this.correctLetters.join()){
			//you win.
		}
	}
}

module.exports = Letter;

// this was copied from the last hangman game - hoping to use it.
// for (i = 0; i < letters.length; i++){
		
// 		if (user guess == letters[i]){
// 			answerArray[i] = letters[i];
// 			document.getElementById("hidden").innerHTML = answerArray.join("");
// 			numbLeft++
			
// 			if (computerGuess == answerArray.join('')) {
// 			}
// 		}
// }