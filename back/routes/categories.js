const router = require("express").Router();
const {
  findCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categories-controller");

// AGREGAR MIDDLEWARE DE AUTH PARA MANEJAR CATEGORÍAS. EL USER DEBE SER SUPERADMIN
router.route("/").get(findCategories).post(createCategory);
router.route("/:id").put(updateCategory).delete(deleteCategory);

module.exports = router;
