const User = require('../models/userModels');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const session = require('express-session');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  User.create(req.body);
  then(({ username, password }) => {
    const payload = { username, password};
    const options = { expiresIn: '1h' };
    const token = jwt.sign(payload, secret, options);

  User.create(user, (err) => {
    if (err) {
      return res.status(500).json(user);
    } else {
      res.status(201).json(err);
    }
  })
});

router.route('/api/login').post((req, res) => {
  // const user = { username, password } = req.body;

  User.findOne({ username })
    .then(user => {
      if (user) {
        user
          .validatePassword(password)
          .then(passwordsMatch => {
            if (passwordsMatch) {
              
              const token = generateToken(user);

              res.status(200).json({ message: `welcome ${username}!`, token });
            } else {
              res.status(401).send('invalid credentials');
            }
          })
          .catch(err => {
            res.send('error');
          });
      } else {
        res.status(401).send('invalid credentials');
      }
    })
    .catch(err => {
      res.send(err);
    });
});

    

module.exports = {
  createUser
};
