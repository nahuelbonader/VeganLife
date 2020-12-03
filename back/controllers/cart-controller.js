const { ProductOrder, Cart } = require("../db/models");

const cartsController = {
  getCart(req, res, next) {
    Cart.findOne({ owner: req.params.userId })
      .populate({ path: "products", populate: { path: "product" } })
      .then((cart) => res.status(201).send(cart))
      .catch(next);
  },

  createCart(req, res, next) {
    Cart.findOne({ owner: req.params.userId })
      .then((cart) => {
        return cart ? cart : Cart.create({ owner: req.params.userId });
      })
      .then((cart) => res.status(201).send(cart))
      .catch(next);
  },

  // REVISAR
  setCart(req, res, next) {
    Cart.findOne({ owner: req.params.userId })
      .then((cart) => {
        if (cart.products.length > 0) {
          const orders = cart.products.map((productOrder) =>
            ProductOrder.deleteOne({ _id: productOrder._id })
          );
          cart.products = [];
          Promise.all(orders).then(() => cart.save());
        } else return cart;
      })
      .then((cart) => {
        const newCart = probandoCart.map((order) => ProductOrder.create(order));
        Promise.all(newCart).then((orders) => {
          cart.products = orders;
          return cart.save();
        });
      })
      .then((cart) =>
        cart
          .populate({ path: "products", populate: { path: "product" } })
          .execPopulate()
      )
      .then((cart) => res.send(cart))
      .catch(next);
  },

  // REVISAR
  resetCart(req, res, next) {
    Cart.findOne({ owner: req.params.userId })
      .then((cart) => {
        const orders = cart.products.map((productOrder) =>
          ProductOrder.deleteOne({ _id: productOrder._Id })
        );
        return Promise.all(orders);
      })
      .then((emptyCart) => res.status(204).send(emptyCart))
      .catch(next);
  },
};

module.exports = cartsController;
