const routerUsers = require('express').Router();
const path = require('path');
const users = require(path.join(__dirname, '../data/users.json'));

routerUsers.get('/', (req, res) => {
  res.send(users);
});
// eslint-disable-next-line consistent-return
routerUsers.get('/:id', (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  const user = users.find((item) => item._id === req.params.id);
  if (user) {
    return res.send(user);
  }
  res.status(404).send({ message: 'Нет пользователя с таким id' });
});
module.exports = routerUsers;
