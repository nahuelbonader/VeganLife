const router = require("express").Router();
const {
  findCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categories-controllers");

router.route("/").get(findCategories).post(createCategory);
router.route("/:categorieId").put(updateCategory).delete(deleteCategory);

module.exports = router;
