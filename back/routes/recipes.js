const router = require("express").Router();
const {
  findRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  findRecipe,
} = require("../controllers/recipes-controlelrs");

router.route("/").get(findRecipes).post(createRecipe);
router
  .route("/:recipeId")
  .put(updateRecipe)
  .delete(deleteRecipe)
  .get(findRecipe);

module.exports = router;
