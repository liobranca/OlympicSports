const { CartItem, CartUser } = require("../models");

exports.cartUserUpdate = (req, res) => {
  const { id } = req.user;

  CartItem.findAll({
    where: {
      userId: id,
    },
  })
    .then((items) => {
      const precios = [];
      const cantidad = [];
      for (let i = 0; i < items.length; i++) {
        precios.push(items[i].dataValues.price);
        cantidad.push(items[i].dataValues.quantity);
      }
      return [precios, cantidad];
    })
    .then((preciosYcantidad) => {
      const total = [];
      for (let i = 0; i < preciosYcantidad[0].length; i++) {
        total.push(preciosYcantidad[0][i] * preciosYcantidad[1][i]);
      }

      if (total.length >= 1) {
        const final = total.reduce((a, b) => a + b);
        return final;
      } else {
        const final = 0;
        return final;
      }
    })
    .then((final) => {
      CartUser.findOne({
        where: {
          userId: id,
        },
      }).then((cartUser) => {
        cartUser.update({ total: final }).then((updated) => res.send(updated));
      });
    });
};

exports.cartUserGet = (req, res) => {
  const { id } = req.user;

  CartUser.findOne({
    where: {
      userId: id,
    },
  }).then((data) => res.send(data));
};
