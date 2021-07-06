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
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "product_id",
      references: {
        key: "id",
        model: "products_model"
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "quantity"
    }
  };
  const options = {
    tableName: "products_inventory",
    comment: "",
    indexes: [{
      name: "product_inventory_product_id_idx",
      unique: false,
      type: "BTREE",
      fields: ["product_id"]
    }]
  };
  const ProductsInventoryModel = sequelize.define("products_inventory_model", attributes, options);
  return ProductsInventoryModel;
};