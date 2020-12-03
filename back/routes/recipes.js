const router = require("express").Router();
const {
  findRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  findRecipe,
} = require("../controllers/recipes-controller");

// AGREGAR MIDDLEWARE DE USER LOGUEADO AL CREATE, DELETE Y UPDATE
router.route("/").get(findRecipes).post(createRecipe);
router.route("/:id").put(updateRecipe).delete(deleteRecipe).get(findRecipe);


module.exports = router;
