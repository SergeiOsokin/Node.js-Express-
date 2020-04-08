const routerCards = require('express').Router();
const path = require('path');
const cards = require(path.join(__dirname, '../data/cards.json'));
// const cards = require('../data/cards');

routerCards.get('/', (req, res) => {
  res.send(cards);
});
module.exports = routerCards;
