const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");

const apiRouter = require("./api-router.js");

const sessionConfig = {
  name: "monkey", //default would be sid
  secret: "keep it secret, keep it safe", // should be an environment variable USED FOR ENCRYPTION
  cookie: {
    maxAge: 1000 * 60 * 10, // in miliseconds
    secure: false, //! false means using http.  TRUE === HTTPS which is what you want...but maybe not in development (^_^)
    httpOnly: true //* if true JS cannot access the cookie
  },
  resave: false,
  saveUninitialized: false //* GDPR laws against setting cookies automatically;  development == true; production == false
};

const middleware = [helmet(), cors(), express.json(), session(sessionConfig)];

const server = express();

server.use("/api", middleware, apiRouter);

module.exports = server;
