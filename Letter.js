var inquirer = require("inquirer");

var ALPHABET = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
underlying = ALPHABET[3];
// dependency for inquirer npm package
var inquirer = require("inquirer");

// constructor function used to create Letter objects
function Letter(userGuess, underlying, checked, correctLetter, wrongLetters, dashes) {
  
  this.userGuess = userGuess;
  this.underlying = underlying;//underlying letter
	this.checked= checked;//boolean value to check if the letter was guesed
  this.correctLetter = correctLetter;//correct guesses (no repeat letters)
	this.wrongLetters = wrongLetters;//incorrect guesses
	this.dashes ='_';                 // display of the word
	this.checkIfGuessed = function() {
    if (this.checked === true) {
      this.correctLetter = this.userGuess;
      console.log(this.correctLetter);
    }
    else {
      this.wrongLetters= this.userGuess;
      console.log(this.dashes); 
    }
  };
}

// creates the printInfo method and applies it to all letter objects
Letter.prototype.printInfo = function() {
  console.log("Letter: " + this.userGuess);
};

// runs inquirer and asks the user a series of questions whose replies are
// stored within the variable answers inside of the .then statement
inquirer.prompt([  
  {
    name: "userGuess",
    message: "Name a letter"
  }

]).then(function(answers) {
  // initializes the variable newLetter to be a letter object which will take
  // in all of the user's answers to the questions above
  var newLetter = new Letter(  
    answers.userGuess
  );
  //console.log("Checking: " + newLetter.userGuess);
  newLetter.printInfo();

  //check if underlying===userGuess

  var isCorrect = function(newLetter) {
  if (newLetter.userGuess===this.underlying) {
    console.log("CORRECT!");
    newLetter.checked = true;
  }
  else {
      console.log("WRONG");
      newLetter.checked = false; 
  }

};
  isCorrect(newLetter);
  newLetter.checkIfGuessed();  
});

//module.exports = Letter;
