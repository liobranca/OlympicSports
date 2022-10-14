const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/db/db")


class CartHistory extends Model {
  
}

CartHistory.init(
    {
      products:{
        type:DataTypes.ARRAY(DataTypes.TEXT)
      },
      quantityForProduct:{
        type: DataTypes.ARRAY(DataTypes.INTEGER)
      },
      total:{
        type:DataTypes.INTEGER
      }

    },
    {
      sequelize,
      modelName: "carthistory",
    }
  );


  module.exports = CartHistory