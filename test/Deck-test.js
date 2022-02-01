const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

let card1;
let card2;
let card3;
let deck;

describe('Deck', function() {
  beforeEach(() => {
    card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object')
    card2 = new Card(2, 'what is a comma-separated list of related values?', ["array", "object", "function"], 'array')
    card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], 'mutator method')
    deck = new Deck([card1, card2, card3])
  })
  
  it('should be a function', function() {
    expect(Deck).to.be.a('function')
  })
 
  it('should be an istance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck)
  })

  it('should take in an array of cards', function() {
    expect(deck.cards).to.be.an('array')
  })

  it('should count cards', function() {
    expect(deck.countCards()).to.equal(3)
  })
})
