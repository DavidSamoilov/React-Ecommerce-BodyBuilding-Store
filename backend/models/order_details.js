const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_details', {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'orders',
        key: 'id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    price: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'order_details',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "product_id" },
          { name: "order_id" },
        ]
      },
      {
        name: "order_details_order_id_idx",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
    ]
  });
};
