const { Purchase } = require("../db/models");

const purchasesController = {
  findPurchases(req, res, next) {
    Purchase.find({ active: true })
      .populate({ path: "client", select: ["name", "image"] })
      .populate({ path: "store", select: ["name", "image"] })
      .then((purchases) => res.status(200).send(purchases))
      .catch((err) => next(err));
  },
  createPurchase(req, res, next) {
    Purchase.create(req.body)
      .then((purchase) => res.send(purchase))
      .catch((err) => next(err));
  },
  findPurchase(req, res, next) {
    Purchase.findById(req.params.id)
      .populate({ path: "client", select: ["name", "image"] })
      .populate({ path: "store", select: ["name", "image"] })
      .populate({ path: "products", populate: { path: "product" } })
      .then((purchase) => res.status(200).send(purchase))
      .catch((err) => next(err));
  },
  updatePurchase(req, res) {
    Purchase.findByIdAndUpdate(
      req.params.id,
      { active: false },
      { new: true, runValidators: true }
    )
      .populate({ path: "client", select: ["name", "image"] })
      .populate({ path: "store", select: ["name", "image"] })
      .then((purchase) => res.status(200).send(purchase))
      .catch((err) => next(err));
  },
};

module.exports = purchasesController;
