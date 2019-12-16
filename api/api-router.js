// const router = require('express').Router(); this is also then no need for lines 2 and 7;
const router = require("express");

const authRouter = require("../auth/auth-router");
const usersRouter = require("../users/users-router");

const router = express.Router();

router.use("/auth", authRouter);
router.use("/users", usersRouter);

router.get("/", (req, res) => {
  res.status(200).json({ api: "response from api working" });
});
