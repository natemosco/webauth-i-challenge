const knex = require("knex");

const knexfile = require("../knexfile");

const envitonment = process.env.NODE_ENV || "development";

module.exports = knex(knexfile[environment]);
