const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    user_address_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_address',
        key: 'id'
      }
    },
    order_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    total_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'orders',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "orders_user_id_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "orders_user_address_id_idx",
        using: "BTREE",
        fields: [
          { name: "user_address_id" },
        ]
      },
    ]
  });
};
