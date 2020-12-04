const router = require("express").Router();

const {
  getCart,
  createCart,
  resetCart,
  setCart,
} = require("../controllers/cart-controller");

// AGREGAR MIDDLEWARE DE USER LOGUEADO A LOS 4 METHODS
router
  .route("/:userId")
  .get(getCart)
  .post(createCart)
  .delete(resetCart)
  .put(setCart);

module.exports = router;
