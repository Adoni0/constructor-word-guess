const WordJs = require('./word.js');
var inquirer = require('inquirer');
var wordsArr = ['Doom', 'Animal Crossing', 'Madden', 'Assassins Creed', 'God of War', 'Mario Kart'];
var remainingGuesses = 10;

var Logic = function(randomWord){
  // Randomly selects a word and uses the Word constructor to store it
  this.randomWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];
  WordJs(randomWord);
}
  
  var terminal = function(){
    inquirer.prompt([{
      name: 'guess',
      message: 'Guess a letter!'
    }]).then(function(answer){
      WordJs();
      remainingGuesses--;
      console.log('Remaining Guesses: ' + remainingGuesses);
    })
  }

  var myFunction = function(){
    if(isLetterGuessed){
      console.log('Correct!');
    }else{
      console.log('Incorrect! Try again');
    }
  }



Logic();