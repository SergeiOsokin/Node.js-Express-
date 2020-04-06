/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-plusplus */
const routerUsers = require('express').Router();
// eslint-disable-next-line import/no-unresolved
const users = require('../data/users');
// eslint-disable-next-line no-undef
routerUsers.get('/', (req, res) => {
  res.send(users);
});
// eslint-disable-next-line consistent-return
routerUsers.get('/:id', (req, res, next) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i]._id === req.params.id) {
      return res.send(users[i]);
    }
  }
  res.send({ message: 'Нет пользователя с таким id' });
});
module.exports = routerUsers;
