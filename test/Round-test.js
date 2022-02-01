const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

let card1;
let card2;
let card3;
let deck;
let round;
let turn


describe('Round', function() {
  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    card2 = new Card(2, 'what is a comma-separated list of related values?', ["array", "object", "function"], 'array')
    card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], 'mutator method')
    deck = new Deck([card1, card2, card3])
    round = new Round(deck)
    turn = new Turn('array', card1)
  })

  it('should be a function', function() {
    expect(Round).to.be.a('function')
  })

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  })
  

  it('should take in a deck of cards', function() {
    expect(round.deck).to.equal(deck.cards);
  })

  it('should store turns count', function() {
    expect(round.turnCount).to.equal(0)
  })

  it('should store an array of incorrect guesses', function() {
    expect(round.incorrectGuesses.length).to.equal(0)
  })

  it('should return the current card being played', function() {
    expect(round.returnCurrentCard()).to.equal(card1)
  })

  it('should have a method that takes in a guess and returns the result', function() {
    expect(round.takeTurn('object')).to.equal('correct!');
    expect(round.takeTurn('wrong answer')).to.equal('incorrect!')
  })
  it('should make a new instance of Turn everytime a guess is made', function() {
    round.takeTurn('array');
    round.takeTurn('some other guess')
    expect(round.turnCount).to.equal(2)
  })

  it('should keep track of incorrect guesses', function() {
    round.takeTurn('array');
    round.takeTurn('some other guess');
    expect(round.incorrectGuesses.length).to.equal(2)   
  })

  it('should move the current card to the back of the deck', function() {
    round.takeTurn('array');
    expect(round.deck[0]).to.equal(card2)
  })

  it('should have a method that calculates and returns the the percentage of correct guesses', function() {
    round.takeTurn('object');
    round.takeTurn('wrong Answer');
    round.takeTurn('mutator method');
    expect(round.calculatePercentCorrect()).to.equal(`${66.67}%`)
  })

  

})