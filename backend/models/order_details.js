const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "order_id",
      references: {
        key: "id",
        model: "orders_model"
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "product_id",
      references: {
        key: "id",
        model: "products_model"
      }
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "price"
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "quantity"
    }
  };
  const options = {
    tableName: "order_details",
    comment: "",
    indexes: [{
      name: "order_details_order_id_idx",
      unique: false,
      type: "BTREE",
      fields: ["order_id"]
    }]
  };
  const OrderDetailsModel = sequelize.define("order_details_model", attributes, options);
  return OrderDetailsModel;
};