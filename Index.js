// requiring Word.js and GetSinger.js exported
var inquirer = require("inquirer");
var Word = require("./Word.js");
var GetSinger = require("./GetSinger.js");

var nextWord = new Word(GetSinger.singer);

function playerGuess() {
    
    inquirer.prompt([{
        name: "lit",
        type: "text",
        message: "Pick a letter",
    }]).then(function(answer) {
        console.log("===============================");
        var lit = answer.lit;
        nextWord.guess(lit);   
        if (nextWord.points === 0) {
            console.log("You lost! The answer is:  "  + GetSinger.singer.toUpperCase());
            console.log();
            playAgain();
        } else {
            console.log("Try another letter!");
            console.log();
            playerGuess();
        }   
    });
}

function playAgain() {
    inquirer.prompt([{
        type: "input",
        message: "Would you like to play again?",
        name: "playAgain"
    }]).then(function(answer) {
        var answer = answer.playAgain;
        if (answer === "y"||answer === "Y"||answer === "yes"||answer === "YES") {
            nextWord = new Word(GetSinger.singer);
            playerGuess();    
        } else if (answer === "n" || answer === "no" || answer === "N" || answer === "NO") {
            console.log("Thanks for playing!");
            return;
        }
    })
}                

playerGuess();

//console.log("My Index singer " + GetSinger.singer);




