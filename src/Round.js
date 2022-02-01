
const Turn = require('./Turn');


class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turnCount = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[0]
  }
  
  takeTurn(guess) {
    let newTurn = new Turn(guess, this.returnCurrentCard())
    this.turnCount ++
    let frontCard = this.deck.shift()
    this.deck.push(frontCard)
    if (newTurn.giveFeedback() === 'incorrect!') {
      this.incorrectGuesses.push(newTurn)
    }
    return newTurn.giveFeedback()
  }

  calculatePercentCorrect() {
    let correctAnswers = this.turnCount - this.incorrectGuesses.length;
    let percentRight = ((correctAnswers / this.turnCount) * 100).toFixed(2);
    return `${percentRight}%`
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()} of the questions correctly!`
  }

}

module.exports = Round;