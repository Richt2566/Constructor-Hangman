
// require this to use letter constructor
var Letter = require("./letter.js");


// this is the random word generator
var hangmanWords = ["tank"];
var rand = Math.floor(Math.random()*hangmanWords.length);
var randomWord = hangmanWords[rand];

// the arrays to show word and contain guesses
var answerLength = randomWord.length;
var display = [answerLength];

// word constructor function
function Word(word){

	// I don't know...
	this.word = word;

	// function to reveal word into split letters
	this.revealWord = function(){
		var theWord = randomWord.split("");

    	console.log(theWord);
	}

	// giving the user guesses left
	this.guessesLeft = 10;

	//keeping track of all things guessed??
	this.guessedLetters = [];
	

	// function to show current split word into underscores
	this.wordWithUnderScores = function(){
		var output = "";

		var theWord = randomWord.split("");

		for (i = 0; i < theWord.length; i++) {
			display[i] = "_ ";
			output = output + display[i];
			
		}

		console.log(output);
		console.log(theWord);

	}

}

module.exports = Word;