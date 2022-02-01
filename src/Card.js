class Card {
  constructor(id, question, optAnswers, correctAnswer) {
    this.id = id;
    this.question = question;
    this.answers = optAnswers;
    this.correctAnswer = correctAnswer;
  }
}




module.exports = Card;