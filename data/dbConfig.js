const knex = require("knex");

const knexfile = require("../knexfile");

const enviroronment = process.env.NODE_ENV || "development";

module.exports = knex(knexfile[enviroronment]);
