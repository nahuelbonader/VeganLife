const { User, ProductOrder, Cart } = require("../db/models");

const cartsController = {
  getCart(req, res, next) {
    Cart.findOne({ owner: req.user._id })
      .populate({ path: "products", populate: { path: "product" } })
      //req.user._id (cambiar el req.body despues de usar postman)
      .then((user) => res.status(201).send(user.cart))
      .catch(next);
  },


  createCart(req, res, next) {
    Cart.create({ owner: req.user._id })
      .then((cart) => res.status(201).send(cart))
      .catch(next);
  },


  setCart(req, res, next) {
    Cart.findOne({ owner: req.user._id })
      .populate("products")
      .then((cart) => {
        if (cart.products.length > 0) {
          const orders = cart.products.map((productOrder) =>
            ProductOrder.deleteOne({ _id: productOrder._id })
          );
          return Promise.all(orders);
        } return cart
      }) 
      .then((cart) => {
        const newCart = req.body.map((order) => ProductOrder.create(order));
        Promise.all(newCart)
          .then((orders) => {
            cart.products = orders;
            return cart.save();
          })
          .then((cart) => {
            cart
              .populate({ path: "products", populate: { path: "product" } })
              .execPopulate()
              .then((cart) => res.send(cart));
          });
      })
      .catch(next);
  },


  resetCart(req, res, next) {
    Cart.findOne({ owner: req.user._id })
      .then((cart) => {
        const orders = cart.products.map((productOrder) =>
          ProductOrder.deleteOne({ _id: productOrder._Id })
        );
        Promise.all(orders).then((emptyCart) =>
          res.status(204).send(emptyCart)
        );
      })
      .catch(next);
  },
};

module.exports = cartsController;
