const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
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
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "category_id",
      references: {
        key: "id",
        model: "categories_model"
      }
    }
  };
  const options = {
    tableName: "product_categories",
    comment: "",
    indexes: [{
      name: "category_id_idx",
      unique: false,
      type: "BTREE",
      fields: ["category_id"]
    }]
  };
  const ProductCategoriesModel = sequelize.define("product_categories_model", attributes, options);
  return ProductCategoriesModel;
};