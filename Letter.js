var inquirer = require("inquirer");

var ALPHABET = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// dependency for inquirer npm package
var inquirer = require("inquirer");

// constructor function used to create programmers objects
function Letter(userGuess, lettersGuess, correctLetter, wrongLetters, dashes, selectedWord) {
  
  	this.userGuess = userGuess
   	this.lettersGuess = lettersGuess;
	this.correctLetter = correctLetter;
	this.wrongLetters = wrongLetters;
	this.dashes = [];
	this.selectedWord=selectedWord;
}

// creates the printInfo method and applies it to all programmer objects
Letter.prototype.printInfo = function() {
  console.log("Letter: " + this.userGuess);
};

Letter.prototype.setWord = function() {
	var word = "jenniferl";
	this.selectedWord = word.split('');
	var self = this;
	this.selectedWord.forEach(function(letter) {
		self.dashes.push('-');
	});
  /*
	this.selectedWord.forEach(function (letter, i) {
		if (thisuserGuess === letter) {
			self.dashes[i] = letter;
		}
	});
  */
}
/*

var constructWord = function(completeObject){
 for (var i=0; i<word.length; i++ )
    {completeObject.WORD= completeObject.WORD.replace("[-]"),completeObject.letter[i]  }

console.log(completeObject.WORD);
}
	
*/

// variable we will use to count how many times our questions have been asked
var count = 0;

var askQuestion = function() {
  // if statement to ensure that our questions are only asked five times
  if (count < 5) {
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
      
      {
        name: "userGuess",
        message: "Name a letter"
      }

    ]).then(function(answers) {
      // initializes the variable newguy to be a programmer object which will take
      // in all of the user's answers to the questions above
      var newLetter = new Letter(
        
        answers.userGuess
        

        );
      // printInfo method is run to show that the newguy object was successfully created and filled
      
      
      newLetter.printInfo();
      newLetter.setWord();
      //newLetter.makeGuess();
      console.log(newLetter.dashes);

      //newLetter.makeGuess();
      // add one to count to increment our recursive loop by one
      count++;
      console.log(newLetter.selectedWord);
      console.log(newLetter.dashes);

	
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });
    // else statement which prints "all questions asked" to the console
    // when the code has been run five times
  }
  else {
    console.log("All questions asked");
  }
};

// call askquestion to run our code
askQuestion();




//console.log(newLetter.selectedWord);
//console.log(newLetter.words);
//console.log(newLetter.dashes);
//newLetter.makeGuess('l');
//console.log(newLetter.dashes);
//console.log(newLetter);



/**
 * Hangman class.
 */
//function Letter(name, userGuess, lettersGuess) {
	//this.name=name;
	//this.userGuess = userGuess;
	//this.lettersGuess = lettersGuess;
	//this.guessWord = [];
	//this.correctLetter = [];
	//this.wrongLetters = [];
	//this.dashes = [];
	//this.RemGuess = 15;
	//this.counter = 0;
	//this.words = words;
	//this.selectedWord = [];

	//Programmer.prototype.printInfo = function() {
  //console.log("Letter: " + this.userGuess);
//};
//}

/**
 * Sets selectedWord to a random word.
 */

//module.exports = Letter;
