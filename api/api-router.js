// const router = require('express').Router(); this is also then no need for lines 2 and 7;
const router = require("express");
const bcrypt = require("bcryptjs");

const authRouter = require("../auth/auth-router");
const usersRouter = require("../users/users-router");
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
      res.status(200).json(user);
    })
    .catch(error => {
      console.log(error, "Error from get /register");
      res
        .status(500)
        .json({ errorMessage: "internal error registering a new user" });
    });
});
// router.post('/login', (req, res) => {
//     model
//         .()
//         .then( => {
//             //console.log(, 'response from GET /login');
//             res.status(200).json();
//         })
//         .catch(error => {
//             console.log(error, 'Error from get /login');
//             res.status(500).json({ errorMessage: 'internal error fetching '});
//         });
// });
POST | /api/gilno;
module.exports = router;
