// get the client
const mysql = require("mysql2");
const db = require("../config/db.config");
// create the connection to database

const { host, user, database, password, pool } = db;
const connection = mysql.createConnection({
  host,
  user,
  database,
  password,
  pool,
});

module.exports = connection;
