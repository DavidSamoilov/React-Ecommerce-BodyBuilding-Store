// get the client
const mysql = require("mysql2");
const db = require("../config/db.config")
// create the connection to database

const {host,user,database,password} = db
const connection = mysql.createConnection({
  host,
  user,
  database,
  password,
  connectTimeout: 30000
});

module.exports = connection;
