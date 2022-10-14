const { CartUser, CartItem, Product } = require("../models");

exports.GetCartItem = (req, res) => {
  const { id } = req.user;
  CartItem.findAll({
    where: {
      userId: id,
    },
  })
    .then((cartItems) => res.send(cartItems))
    .catch((error) => console.log(error));
};

exports.GetCartItems = (req, res) => {

  const { id } = req.user;
  const { productId } = req.query;

  CartItem.findAll({
    where: { userId: id },
    include: { model: Product , where: {
      id : productId
    }}
  }).then(cartItems => res.send(cartItems))
  .catch(err => console.log(err))
};

exports.CreateCartItem = (req, res) => {
  const { userId , productId } = req.body
  CartUser.findOne({where:{
    id : userId //esto es el id del usuario
  }})
  .then((cartUser)=>{
    CartItem.findOne({ where: { productId: productId, userId: userId} }).then(
      (item) => {
        if (!item) {  
          CartItem.create(req.body)
            .then((item) => {
              cartUser.addCartItem(item.dataValues.id)
              
            })
            .catch((error) => {
              console.log("Error to create item", error);
            });
        } else {
          item.update({ quantity: item.quantity + 1 });
        }
      }
    );
  })
    .then((cartItems) => res.send(cartItems))
    .catch((error) => console.log(error));
};


exports.DeleteCartItem = (req, res) => {
  const id = req.params.id;
  CartItem.destroy({
    where: {
      id: id,
    },
  })
    .then(() => res.sendStatus(204))
    .catch((error) => {
      console.log("Error to delete item", error);
    });
};

exports.ModifyCartItem = (req, res) => {
  const id = req.params.id;
  CartItem.update(req.body, { where: { id: id }, returning: true })
    .then(([row, itemUpdated]) => res.status(201).send(itemUpdated))
    .catch((error) => {
      console.log("Error to modify item", error);
    });
};

