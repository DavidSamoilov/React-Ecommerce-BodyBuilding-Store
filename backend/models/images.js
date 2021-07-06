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
    image: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "image",
      unique: "image_UNIQUE"
    }
  };
  const options = {
    tableName: "images",
    comment: "",
    indexes: [{
      name: "images_product_id_idx",
      unique: false,
      type: "BTREE",
      fields: ["product_id"]
    }]
  };
  const ImagesModel = sequelize.define("images_model", attributes, options);
  return ImagesModel;
};