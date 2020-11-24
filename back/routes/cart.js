const router = require("express").Router();

const {
  getCart,
  createCart,
  resetCart,
  setCart,
} = require("../controllers/cart-controller");

router.route("/").get(getCart).post(createCart).delete(resetCart).put(setCart);

module.exports = router;
