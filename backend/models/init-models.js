var DataTypes = require("sequelize").DataTypes;
var _cart = require("./cart");
var _categories = require("./categories");
var _images = require("./images");
var _order_details = require("./order_details");
var _orders = require("./orders");
var _product_categories = require("./product_categories");
var _products = require("./products");
var _products_inventory = require("./products_inventory");
var _user_address = require("./user_address");
var _users = require("./users");

function initModels(sequelize) {
  var cart = _cart(sequelize, DataTypes);
  var categories = _categories(sequelize, DataTypes);
  var images = _images(sequelize, DataTypes);
  var order_details = _order_details(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var product_categories = _product_categories(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var products_inventory = _products_inventory(sequelize, DataTypes);
  var user_address = _user_address(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  categories.belongsToMany(products, { as: 'product_id_products_product_categories', through: product_categories, foreignKey: "category_id", otherKey: "product_id" });
  orders.belongsToMany(products, { as: 'product_id_products', through: order_details, foreignKey: "order_id", otherKey: "product_id" });
  products.belongsToMany(categories, { as: 'category_id_categories', through: product_categories, foreignKey: "product_id", otherKey: "category_id" });
  products.belongsToMany(orders, { as: 'order_id_orders', through: order_details, foreignKey: "product_id", otherKey: "order_id" });
  product_categories.belongsTo(categories, { as: "category", foreignKey: "category_id"});
  categories.hasMany(product_categories, { as: "product_categories", foreignKey: "category_id"});
  order_details.belongsTo(orders, { as: "order", foreignKey: "order_id"});
  orders.hasMany(order_details, { as: "order_details", foreignKey: "order_id"});
  cart.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(cart, { as: "carts", foreignKey: "product_id"});
  images.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(images, { as: "images", foreignKey: "product_id"});
  order_details.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(order_details, { as: "order_details", foreignKey: "product_id"});
  product_categories.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(product_categories, { as: "product_categories", foreignKey: "product_id"});
  products_inventory.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(products_inventory, { as: "products_inventories", foreignKey: "product_id"});
  orders.belongsTo(user_address, { as: "user_address", foreignKey: "user_address_id"});
  user_address.hasMany(orders, { as: "orders", foreignKey: "user_address_id"});
  cart.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(cart, { as: "carts", foreignKey: "user_id"});
  orders.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(orders, { as: "orders", foreignKey: "user_id"});
  user_address.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(user_address, { as: "user_addresses", foreignKey: "user_id"});

  return {
    Cart:cart,
    Categories:categories,
    Images:images,
    order_details,
    Orders:orders,
    product_categories,
    Products:products,
    products_inventory,
    user_address,
    Users:users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
