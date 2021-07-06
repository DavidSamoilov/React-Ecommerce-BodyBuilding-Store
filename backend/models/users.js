const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id",
      unique: "id_UNIQUE"
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "email",
      unique: "email_UNIQUE"
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "password"
    },
    first_name: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "first_name"
    },
    is_admin: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "is_admin"
    }
  };
  const options = {
    tableName: "users",
    comment: "",
    indexes: []
  };
  const UsersModel = sequelize.define("users_model", attributes, options);
  return UsersModel;
};