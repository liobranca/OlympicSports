const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/db/db")


class CartUser extends Model {
  
}

CartUser.init(
    {

      total: {
        type: DataTypes.INTEGER,
        allowNull: true,
      }

    },
    {
      sequelize,
      modelName: "cartUser",
    }
  );


  module.exports = CartUser