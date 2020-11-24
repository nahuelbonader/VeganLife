const router = require("express").Router();
const {
  findPurchases,
  findPurchase,
  createPurchase,
  updatePurchase,
} = require("../controllers/purchases-controller");

router.route("/").get(findPurchases).post(createPurchase);
router.route("/:id").get(findPurchase.put(updatePurchase));

module.exports = router;
