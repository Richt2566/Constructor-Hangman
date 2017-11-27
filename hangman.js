// this is the main page...

// require inquirer to ask the user questions
var inquirer = require('inquirer');
// require word.js to use the word constructor
var Word = require("./word.js");
// require letter.js to use the letter constructor
var Letter = require("./letter.js");
var newWord = new Word();
var newLetter = new Letter();
var hangmanWords = ["tank"];
var rand = Math.floor(Math.random()*hangmanWords.length);
var randomWord = hangmanWords[rand];

// this is me attempting to put things into objects...
var theGame = {
	wordsWon: 0,
 	guessesLeft: 10,
 	currentWord: null,

 	// asking if they would like to play?
 	firstQuestion: function(){
 		inquirer.prompt([
		        {
		            type: "confirm",
		            name: "confirm",
		            message: "Would you like to play a game of Hangman?"
		        }
		    // this is where the user chooses yes or no    
		    ]).then(function(data){
		    	// if yes...
		    	if (data.confirm === true){
		    		console.log("COOL! Here is your word. Good Luck!");

		    		//reveal word with underscores.
		    		//var newWord = new Word();
					newWord.wordWithUnderScores();
		    		
		    		// using recursion to continue to ask for a letter
		    		theGame.askForLetter();

		    	// if user does not want to play || (play again)
		    	} else {
		    		console.log("Okay then, you have a nice day.")
		    	}

		    });
		    
	},
	askForLetter: function(){
		inquirer.prompt([
			{
				type: "text",
				name: "letter",
				message: "Guess a letter: "
			}

		]).then(function(data){

			// for loop to go through the current word.
			for (i in randomWord) {

				// if user letter guess equals letter in current word
				if(data.letter === randomWord[i]) {
					
					// this should be a single function 

					var chone = new Letter();

					//push letter into correctLetters array...
					chone.correctLetters.push(data.letter);

					data.letter[i] = chone.correctLetters[i];

					//chone.correctLetters.join();

					//console.log(chone.correctLetters);

					chone.correctLetters[i] = data.letter[i];

					console.log("correct!!"); // in green
					
					//reveal the letter in its spot
					//newLetter.revealLetterinSpot();
					if (chone.correctLetters[i] === undefined){
						console.log(" _");
					}
				
				} else {

					// if letter is incorrect
					console.log("incorrect!"); // in red
					

					//console.log("You have " + theGuesses.guessesLeft + " left");
				}

				// if(randomWord === chone.correctLetters.join('')){
				// 	console.log("you got it right!"); 

					// inquirer - would you like to play again?

					// if so, next word...
					// if not, say goodbye...
				// }

			}// end of for loop
			console.log(chone.correctLetters);

		});// end of then inquirer 
	} // end of askForLetter function
}// end of theGame object

theGame.firstQuestion();


