var LetterJs = require('./letter.js');

var Word = function(word){
   //An array of new Letter objects representing the letters of the underlying word
    this.wordLetters = word.split('').map(function(character){
        return new LetterJs(character);
    });
    this.wordFunction = function(){
        placeholder();
    }
    this.guessLetter = function(userGuess){//takes a character as an argument and calls the guess function on each letter object
        guessFunction();
    }
}

Word.prototype.getAnswer = function(){
    return this.wordLetters.map(function(letter){
        return letter.getAnswer();

    }).join('');
}

Word.prototype.toString = function(){
    return this.wordLetters.join(' ');

}

Word.prototype.guessedLetter = function(userGuess){
    var match = false;
    this.wordLetters.forEach(letter => {
        if(letter.userGuess(userGuess)){
            match = true;
        }

    });
    console.log('\n' + this);
    return match;
}

Word.prototype.guessedCorrect = function(){
    return this.wordLetters.every(function(character){
        return character.isLetterGuessed;
    })
}

module.exports(Word);