// constructor function used to create Letter objects
function Letter(underlying) {
  

  this.underlying = underlying;//underlying letter
	//this.Letter_userGuess = userGuess;
  //this.checked= checked;//boolean value to check if the letter was guesed
  //this.correctLetter = correctLetter;//correct guesses (no repeat letters)
	//this.wrongLetters = wrongLetters;//incorrect guesses 
  this.points = 15;

  this.guess = function(userGuess) {
    this.Letter_userGuess=userGuess;
    if (this.Letter_userGuess===this.underlying) {
      console.log("CORRECT!");
      this.checked = true;
      this.points --; 
      //console.log("You have " + this.points + " points remaining.");
    }
    else {
      console.log("WRONG");
      this.checked = false;
      this.points --; 
      //console.log("You have " + this.points + " points remaining.");
    }
  };
                  
	this.toString = function() {
    if (this.checked === true) {
      console.log(this.Letter_userGuess);
      return this.Letter_userGuess;
    }
    else {
      console.log("-");
      return "-"; 
    }
  };


  this.printInfo = function() {
  console.log("You guessed letter: " + this.Letter_userGuess);
  };
 
}
//var warrior = new Letter("a");
//warrior.guess();
//warrior.toString();

module.exports = Letter;