const dbConfig = require("../config/db.config");

const {host,user,database,password,pool} = dbConfig

const Sequelize = require("sequelize");
const sequelize = new Sequelize(database, user, password, {
  host,
  dialect:"mysql",
  operatorsAliases: false,
  pool 
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.users = require("./users")(sequelize, Sequelize);
module.exports = db;