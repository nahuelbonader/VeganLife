const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/products-controller");

router.route("/").get(ProductController.findAll).post(ProductController.create);

// AGREGAR MIDDLEWAR AUTHORIZACION AL UPDATE Y DELETE STORE._ID === PRODUCT.STORE
router
  .route("/:id")
  .get(ProductController.findById)
  .put(ProductController.update)
  .delete(ProductController.delete);

module.exports = router;
