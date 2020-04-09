/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
const routerUsers = require('express').Router();
const fs = require('fs');
const path = require('path');

routerUsers.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, '../data/users.json'), { encoding: 'utf8' }, (err, data) => {
    if (err) {
      console.log(`Error reading: ${err}`);
      return;
    }
    res.send(JSON.parse(data));
  });
});
routerUsers.get('/:id', (req, res) => {
  fs.readFile(path.join(__dirname, '../data/users.json'), { encoding: 'utf8' }, (err, data) => {
    const user = JSON.parse(data).find((item) => item._id === req.params.id);
    if (err) {
      console.log(`Error reading: ${err}`);
      return;
    }
    if (!user) {
      res.status(404).send({ message: 'Нет пользователя с таким id' });
      return;
    }
    res.send(user);
  });
});
module.exports = routerUsers;
