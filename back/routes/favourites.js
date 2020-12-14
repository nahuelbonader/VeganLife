const router = require("express").Router();
const FavouritesControllers = require("../controllers/favourites-controller");

// AGREGAR MIDDLEWARE DE USER LOGUEADO AL GET, DELETE Y POST

//Products
router
  .route("/:userId/products")
  .get(FavouritesControllers.showFavProducts)
  .post(FavouritesControllers.addFavProduct);
router.delete(
  "/:userId/products/:productId",
  FavouritesControllers.deleteFavProduct
);

//Recipes
router
  .route("/:userId/recipes")
  .get(FavouritesControllers.showFavRecipes)
  .post(FavouritesControllers.addFavRecipe);
router.delete(
  "/:userId/recipes/:recipeId",
  FavouritesControllers.deleteFavRecipe
);

//Stores
router
  .route("/:userId/stores")
  .get(FavouritesControllers.showFavStores)
  .post(FavouritesControllers.addFavSotre);
router.delete("/:userId/stores/:storeId", FavouritesControllers.deleteFavStore);

module.exports = router;
