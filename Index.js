// requiring our Classroom module exported from classroom.js
var inquirer = require("inquirer");

var ALPHABET = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//underlying = ALPHABET[3];

var Word = require("./Word.js");

// creating and storing a new classroom object
var firstWord = new Word("Jenniferl");
/*

inquirer.prompt([  
  {
    name: "userGuess",
    message: "Name a letter"
  }

	]).then(function(answers) {
	  // initializes the variable newLetter to be a letter object which will take
	  // in all of the user's answers to the questions above
	  var userGuess;
	  //var newLetter = new Letter(answers.userGuess.toString()
	  console.log(userGuess + " Hurray");
	  //console.log("Checking: " + newLetter.userGuess);
	  //newLetter.printInfo();
	});

*/
  	//isCorrect(newLetter);
  	//newLetter.checkIfGuessed();  


// calling the addStudent method on our firstClass object

firstWord.guess(ALPHABET[4]);


console.log(firstWord);


