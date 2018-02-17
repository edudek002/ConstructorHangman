// requiring Letter module exported from student.js
var Letter = require("./Letter.js");

// constructor function for creating Word objects
var Word = function(selectedWord) {
  // this.newWord will hold all of our letters objects

  this.selectedWord=selectedWord;
  this.newWord = [];
  this.points = 15;

  for (var i = 0; i < selectedWord.length; ++i)
  {
    var newL = new Letter(selectedWord[i]);
    this.newWord.push(newL);
  }

  console.log();
  console.log("My selected word  " + this.selectedWord);
  console.log();
  //console.log("My newWord  " + this.newWord);
  
  this.guess = function(userGuess) {

    for (var i = 0; i < this.newWord.length; ++i)
      {
      this.newWord[i].guess(userGuess);
      console.log("You have " + this.newWord[i] + " at position " +[i+1]);
      }
    console.log();
    console.log("You guessed the following letters:   " + this.newWord);
    console.log();
    this.points=this.points-1
    console.log("Your points = " + this.points);
    console.log("=============================");
  };
};

module.exports = Word;


/*
Letter.prototype.setWord = function() {
  var word = "jenniferl";
  this.selectedWord = word.split('');
  var self = this;
  this.selectedWord.forEach(function(letter) {
    self.dashes.push('-');
  });
}
  */
  /*
  this.selectedWord.forEach(function (letter, i) {
    if (thisuserGuess === letter) {
      self.dashes[i] = letter;
    }
  });
  */










