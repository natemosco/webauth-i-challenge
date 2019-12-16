const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const apiRouter = require("./api-router.js");

const middleware = [helmet(), cors(), express.json()];

const server = express();

server.use("/api", middleware, apiRouter);

module.exports = server;
