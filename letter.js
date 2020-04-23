
var Letter = function(character){
    this.character = character,//string to store underlying character
    this.isLetterGuessed = false//boolean stores whether the letter has been guessed yet
    
}

Letter.prototype.toString = function(){
    if(this.isLetterGuessed){
        return this.character;
    }else{
        return '_';
    }
}

Letter.prototype.getAnswer = function(){
    return this.character;
}

Letter.prototype.userGuess = function(guess){
    if(guess == this.character){
        this.isLetterGuessed = true;
        return true;
    }
    return false;
}

module.exports = Letter;

