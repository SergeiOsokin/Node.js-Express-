const routerCards = require('express').Router();
const cards = require('../data/cards');
// eslint-disable-next-line no-undef
routerCards.get('/', (req, res) => {
  // eslint-disable-next-line no-undef
  // eslint-disable-next-line no-console
  res.send(cards);
});
module.exports = routerCards;
