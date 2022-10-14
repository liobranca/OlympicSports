const User = require("../models/User")
const Product = require("../models/Product")
const CartUser = require("../models/CartUser")
const CartItem = require("../models/CartItem")
const CartHistory = require("../models/CartHistory")


//CartItem.hasMany(Product)
CartUser.belongsToMany(CartItem,{through: "shoppingCart"})
CartItem.belongsToMany(CartUser,{through: "shoppingCart"})

CartUser.belongsTo(User)
CartItem.belongsTo(Product)
CartHistory.belongsTo(User)
CartItem.belongsTo(User)



module.exports = {User, Product,CartUser,CartItem, CartHistory}