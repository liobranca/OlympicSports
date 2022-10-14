const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db/db");

class CartItem extends Model {}

CartItem.init(
  {
    quantity: {
      type: DataTypes.INTEGER,

      allowNull: false,
      defaultValue: 1,
    },
    price: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: "cartItem",
  }
);

module.exports = CartItem;
