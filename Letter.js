var inquirer = require("inquirer");

var ALPHABET = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// dependency for inquirer npm package
var inquirer = require("inquirer");

//var dashes = '_';

// constructor function used to create Letter objects
function Letter(userGuess, underlying, checked, dashes) {

//function Letter(userGuess, underlying, dashes) {  
  this.userGuess = userGuess;
  this.underlying = underlying;//underlying letter
	this.checked= checked;//boolean value to check if the letter was guesed
  //this.correctLetter = correctLetter;//correct guesses (no repeat letters)
	//this.wrongLetters = wrongLetters;//incorrect guesses
	this.dashes ='_'; 
  this.points = 15;

  this.isCorrect = function(userGuess) {
    if (this.userGuess===this.underlying) {
      console.log("CORRECT!");
      this.checked = true;
      this.points --; 
        console.log("You have " + this.points + " points remaining.");
    }
    else {
        console.log("WRONG");
        this.checked = false;
        this.points --; 
        console.log("You have " + this.points + " points remaining.");
    }
  };
                  // display of the word
	this.checkIfGuessed = function() {
    if (this.checked === true) {
      //this.correctLetter = this.userGuess;
      console.log(this.userGuess);
    }
    else {
      //this.wrongLetters= this.userGuess;
      console.log(this.dashes); 
    }
  };


  this.printInfo = function() {
  console.log("You guessed letter: " + this.userGuess);
  };
 
}
//var warrior = new Letter("a", "a", true, "-");
//warrior.printInfo();
//warrior.isCorrect();
//warrior.checkIfGuessed();

module.exports = Letter;
