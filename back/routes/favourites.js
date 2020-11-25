const router = require("express").Router();
const FavouritesControllers = require("../controllers/favourites-controller");

// AGREGAR MIDDLEWARE DE USER LOGUEADO AL GET, DELETE Y POST

//Products
router
  .route("/products")
  .get(FavouritesControllers.showFavProducts)
  .post(FavouritesControllers.addFavProduct);
router.delete("/products/:productId", FavouritesControllers.deleteFavProduct);

//Recipes
router
  .route("/recipes")
  .get(FavouritesControllers.showFavRecipes)
  .post(FavouritesControllers.addFavRecipe);
router.delete("/recipes/:recipeId", FavouritesControllers.deleteFavrecipe);

//Stores
router
  .route("/stores")
  .get(FavouritesControllers.showFavStores)
  .post(FavouritesControllers.addFavSotre);
router.delete("/stores/:storeId", FavouritesControllers.deleteFavStore);

module.exports = router;
