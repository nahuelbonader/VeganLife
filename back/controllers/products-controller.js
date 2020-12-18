const { Product } = require("../db/models/index");

const ProductController = {
  findAll(req, res, next) {
    Product.find({ active: true })
      .populate({ path: "store", select: "name" })
      .then((products) => res.send(products))
      .catch((err) => next(err));
  },
  findById(req, res, next) {
    Product.findById({ _id: req.params.id, active: true })
      .populate({ path: "store", select: "name" })
      .then((product) => res.send(product))
      .catch((err) => next(err));
  },
  create(req, res, next) {
    Product.create(req.body)
      .then((product) =>
        product.populate({ path: "store", select: "name" }).execPopulate()
      )
      .then((product) => res.send(product))
      .catch((err) => next(err));
  },
  update(req, res, next) {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
      .then((product) =>
        product.populate({ path: "store", select: "name" }).execPopulate()
      )
      .then((updated) => {
        res.status(200).send(updated);
      })
      .catch((err) => next(err));
  },
  delete(req, res, next) {
    Product.findByIdAndUpdate(req.params.id, { active: false }, { new: true })
      .then((product) => res.send(product))
      .catch((err) => next(err));
  },
};

module.exports = ProductController;
