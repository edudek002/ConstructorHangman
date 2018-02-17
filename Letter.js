// constructor function used to create Letter objects
function Letter(underlying) {
  

  this.underlying = underlying;//underlying letter

  this.guess = function(userGuess) {
    this.Letter_userGuess=userGuess;
    if (this.Letter_userGuess===this.underlying) {
      console.log();
      console.log("CORRECT!");
      this.checked = true; 
      //console.log("You have " + this.points + " points remaining.");
    }
    else {
      console.log();
      console.log("Letter not at this position");
      this.checked = false; 
      //console.log("You have " + this.points + " points remaining.");
    }
  };
                  
	this.toString = function() {
    if (this.checked === true) {
      //console.log(this.Letter_userGuess);
      //console.log();
      return this.Letter_userGuess;
    }
    else {
      //console.log("-");
      //console.log();
      return "-"; 
    }
  };

/*
  this.printInfo = function() {
  console.log("You guessed letter: " + this.Letter_userGuess);
  };
 */
}

module.exports = Letter;