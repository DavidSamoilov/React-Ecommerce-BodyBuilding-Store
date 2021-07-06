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
      field: "id"
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "user_id",
      references: {
        key: "id",
        model: "users_model"
      }
    },
    user_address_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "user_address_id",
      references: {
        key: "id",
        model: "user_address_model"
      }
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "order_date"
    },
    total_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "total_price"
    }
  };
  const options = {
    tableName: "orders",
    comment: "",
    indexes: [{
      name: "orders_user_id_idx",
      unique: false,
      type: "BTREE",
      fields: ["user_id"]
    }, {
      name: "orders_user_address_id_idx",
      unique: false,
      type: "BTREE",
      fields: ["user_address_id"]
    }]
  };
  const OrdersModel = sequelize.define("orders_model", attributes, options);
  return OrdersModel;
};