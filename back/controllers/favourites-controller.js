const { User } = require("../db/models/index");

// REVISAR RETURNS: ¿llega actualizado? ¿llega populado?

const FavouritesControllers = {
  //--------------------------Products--------------------------------------------
  showFavProducts(req, res, next) {
    User.findById(req.params.userId)
      .populate({ path: "favsProducts", select: "title" })
      .then((user) => res.send(user.favsProducts))
      .catch((err) => next(err));
  },
  addFavProduct(req, res, next) {
    User.findById(req.params.userId)
      .then((user) => {
        user.favsProducts.push(req.params.productId);
        user.save();
        res.status(201).send(user.favsProducts);
      })
      .catch((err) => next(err));
  },

  deleteFavProduct(req, res, next) {
    User.findById(req.params.userId)
      .populate({ path: "favsProducts", select: "title" })
      .then((user) => {
        user.favsProducts = user.favsProducts.filter(
          (e) => e._id != req.params.productId
        );
        user.save();
        res.send(user.favsProducts);
      })
      .catch((err) => next(err));
  },

  //--------------------------Recipes---------------------------------------------
  showFavRecipes(req, res, next) {
    User.findById(req.params.userId)
      .populate({ path: "favsRecipes", select: "title" })
      .then((user) => res.send(user.favsRecipes))
      .catch((err) => next(err));
  },

  addFavRecipe(req, res, next) {
    User.findById(req.params.userId)
      .populate({ path: "favsRecipes", select: "title" })
      .then((user) => {
        user.favsRecipes.unshift(req.body);
        user.save();
        res.status(201).send(user.favsRecipes);
      })
      .catch((err) => next(err));
  },

  deleteFavRecipe(req, res, next) {
    const { userId, recipeId } = req.params;
    User.findById(userId)
      .populate({ path: "favsRecipes", select: "title" })
      .then((user) => {
        user.favsRecipes = user.favsRecipes.filter((e) => e._id != recipeId);
        user.save();
        res.send(user.favsRecipes);
      })
      .catch((err) => next(err));
  },

  //---------------------------Stores---------------------------------------------
  showFavStores(req, res, next) {
    User.findById(req.params.userId)
      .populate({ path: "favsStores", select: "name" })
      .then((user) => res.send(user.favsStores))
      .catch((err) => next(err));
  },

  addFavSotre(req, res, next) {
    User.findById(req.params.userId)
      .then((user) => {
        user.favsStores.push(req.params.storeId);
        user.save();
        res.status(201).send(user.favsStores);
      })
      .catch((err) => next(err));
  },
  deleteFavStore(req, res, next) {
    User.findById(req.params.userId)
      .populate({ path: "favsStores", select: "name" })
      .then((user) => {
        user.favsStores = user.favsStores.filter(
          (e) => e._id != req.params.storeId
        );
        user.save();
        res.send(user.favsStores);
      })
      .catch((err) => next(err));
  },
};

module.exports = FavouritesControllers;
