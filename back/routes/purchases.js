const router = require("express").Router();
const {
  findPurchases,
  findPurchase,
  createPurchase,
  updatePurchase,
} = require("../controllers/purchases-controller");

// AGREGAR MIDDLEWAR AUTHORIZACION AL UPDATE STORE._ID === PURCHASE.STORE
router.route("/").get(findPurchases).post(createPurchase);
router.route("/:id").get(findPurchase).put(updatePurchase);

module.exports = router;
