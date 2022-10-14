const { CartHistory, CartUser, CartItem } = require("../models");

exports.getAllCartHistory = (req, res) => {
  const { id } = req.user;
  CartHistory.findOne({ where: { userId: id } })
    .then((history) => {
      if (!history) res.send({ message: "No tienes ninguna compra aun !" });
      else {
        CartHistory.findAll({ where: { userId: id } }).then((result) =>
          res.send(result)
        );
      }
    })
    .catch((err) => console.log(err));
};

exports.createCartHistory = (req, res) => {

  const {id} = req.user

  CartItem.findAll({ where: { userId: id } })
    .then((resul) => {
      const productos = [];
      const quantity = [];
      for (i = 0; resul.length > i; i++) {
        productos.push(resul[i].dataValues.productId);
        quantity.push(resul[i].dataValues.quantity);
      }
      return [productos, quantity];
    })
    .then((productsIdsAndQuantity) => {
      CartHistory.create({
        products: productsIdsAndQuantity[0],
        quantityForProduct: productsIdsAndQuantity[1],
        userId: id,
      }).then((cartHistory) => {
        CartUser.findOne({ where: { userId: id } })
          .then((cartUser) => {
            CartHistory.update(
              { total: cartUser.dataValues.total },
              { where: { id: cartHistory.dataValues.id } }
            );
          })
          .then(() => res.sendStatus(200));
      });
    });
};
