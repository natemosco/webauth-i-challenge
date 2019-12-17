// const router = require('express').Router(); this is also then no need for lines 2 and 7;
const express = require("express");
const bcrypt = require("bcryptjs");

const model = require("./users-model");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ api: "response from api working" });
});

router.get("/users", (req, res) => {
  model
    .findUsers()
    .then(allUsers => {
      //console.log(allUsers, 'response from GET /');
      res.status(200).json(allUsers);
    })
    .catch(error => {
      console.log(error, "Error from get /");
      res
        .status(500)
        .json({ errorMessage: "internal error fetching all Users." });
    });
});
router.post("/register", (req, res) => {
  let newUser = req.body;
  var salt = bcrypt.genSaltSync(12);
  var hash = bcrypt.hashSync(newUser.password, salt);
  newUser.password = hash;
  model
    .insertUser(newUser)
    .then(user => {
      //console.log(user, 'response from POST /register');
      res.status(200).json({ user: user, creds: newUser });
    })
    .catch(error => {
      console.log(error, "Error from get /register");
      res
        .status(500)
        .json({ errorMessage: "internal error registering a new user" });
    });
});
router.post("/login", (req, res) => {
  const { password, username } = req.body;
  model
    .findBy({ username })
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json(user);
      } else {
        res.status(401).json({ errorMessage: "Invalid Credentials" });
      }
    })
    .catch(error => {
      console.log(error, "Error from get /login");
      res.status(500).json({
        errorMessage: "internal error, unable to log you in. please try again."
      });
    });
});

module.exports = router;
