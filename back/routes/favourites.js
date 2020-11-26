const router = require("express").Router();
const FavouritesControllers = require("../controllers/favourites-controller");

// AGREGAR MIDDLEWARE DE USER LOGUEADO AL GET, DELETE Y POST

//Products
router
  .route("/:id/products")
  .get(FavouritesControllers.showFavProducts)
  .post(FavouritesControllers.addFavProduct);
router.delete("/:id/products/:productId", FavouritesControllers.deleteFavProduct);

//Recipes
router
  .route("/:id/recipes")
  .get(FavouritesControllers.showFavRecipes)
  .post(FavouritesControllers.addFavRecipe);
router.delete("/:id/recipes/:recipeId", FavouritesControllers.deleteFavrecipe);

//Stores
router
  .route("/:id/stores")
  .get(FavouritesControllers.showFavStores)
  .post(FavouritesControllers.addFavSotre);
router.delete("/:id/stores/:storeId", FavouritesControllers.deleteFavStore);

module.exports = router;
