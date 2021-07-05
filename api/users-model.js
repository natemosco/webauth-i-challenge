const db = require("../data/dbConfig.js");

module.exports = {
  findUsers,
  findBy,
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
function findBy(filter) {
  return db("users").where(filter);
}

function insertUser(newUser) {
  return db("users")
    .insert(newUser)
    .then(ids => {
      const [id] = ids;
      return findUserById(id);
    });
}
