const dbConfig = require("../config/db.config");
const initModels = require("./init-models")
const {host,user,database,password,pool} = dbConfig

const Sequelize = require("sequelize");
const sequelize = new Sequelize(database, user, password, {
  host,
  dialect:"mysql",
  operatorsAliases: 0,
  // pool 
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = initModels(sequelize);