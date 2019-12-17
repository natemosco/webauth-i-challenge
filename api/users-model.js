const db = require("../data/dbConfig.js/index.js");

module.exports = {
  findUsers,
  findUserById,
  insertUser
};

function findUsers() {
  return db("users");
}

function findUserById(id) {
  return db("users")
    .select("id", "username")
    .where("id", "=", id)
    .first();
}

function insertUser(newUser) {
  return db("users")
    .insert(newUser)
    .then(ids => {
      const [id] = ids;
      return findUserById;
    });
}
