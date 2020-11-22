const express = require("express")
const router = express.Router()
const UserController = require('../controllers/user')

router.get("/", UserController.findAll)
router.get("/:id", UserController.findById)
router.post("/", UserController.create)
router.put("/:id", UserController.update)
router.put("/delete/:id", UserController.delete)

//------------------------Favourites--------------------------------------------
//Products
router.get("/:id/showfav/product", UserController.showFavProducts)
router.put("/:id/addfav/product/:productId", UserController.addFavProduct)

//Recipes
router.get("/:id/showfav/recipe", UserController.showFavRecipes)
router.put("/:id/addfav/recipe/:recipeId", UserController.addFavRecipe)

//Stores
router.get("/:id/showfav/store", UserController.showFavStores)
router.put("/:id/addfav/store/:storeId", UserController.addFavSotre)

module.exports = router
