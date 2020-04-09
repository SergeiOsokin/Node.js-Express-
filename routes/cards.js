/* eslint-disable no-console */
const routerCards = require('express').Router();
const fs = require('fs');
const path = require('path');

routerCards.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, '../data/cards.json'), { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.log(`Error reading: ${err}`);
      return;
    }
    res.send(JSON.parse(data));
  });
});
module.exports = routerCards;
