const { User } = require("../db/models/index");

const FavouritesControllers = {
  //--------------------------Products--------------------------------------------
  showFavProducts(req, res, next) {
    User.findById({ _id: req.params.id })
      .populate({ path: "favsProducts", select: "title" })
      .then((user) => res.send(user.favsProducts))
      .catch((err) => next(err));
  },
  addFavProduct(req, res, next) {
    User.findById(req.params.id)
      .then((user) => {
        user.favsProducts.push(req.params.productId);
        user.save();
        res.status(201).send(user);
      })
      .catch((err) => next(err));
  },

  deleteFavProduct(req, res, next) {
    User.findById({ _id: req.params.id })
      .populate({ path: "favsProducts", select: "title" })
      .then((user) => {
        user.favsProducts = user.favsProducts.filter(
          (e) => e._id != req.params.productId
        );
        user.save();
        res.send(user);
      })
      .catch((err) => next(err));
  },

  //--------------------------Recipes---------------------------------------------
  showFavRecipes(req, res, next) {
    User.findById({ _id: req.params.id })
      .populate({ path: "favsRecipe", select: "title" })
      .then((user) => res.send(user.favsRecipe))
      .catch((err) => next(err));
  },

  addFavRecipe(req, res, next) {
    User.findById(req.params.id)
      .then((user) => {
        user.favsRecipe.push(req.params.recipeId);
        user.save();
        res.status(201).send(user);
      })
      .catch((err) => next(err));
  },

  deleteFavrecipe(req, res, next) {
    User.findById({ _id: req.params.id })
      .populate({ path: "favsRecipe", select: "title" })
      .then((user) => {
        user.favsRecipe = user.favsRecipe.filter(
          (e) => e._id != req.params.recipeId
        );
        user.save();
        res.send(user);
      })
      .catch((err) => next(err));
  },

  //---------------------------Stores---------------------------------------------
  showFavStores(req, res, next) {
    User.findById({ _id: req.params.id })
      .populate({ path: "favsStores", select: "name" })
      .then((user) => res.send(user.favsStores))
      .catch((err) => next(err));
  },

  addFavSotre(req, res, next) {
    User.findById(req.params.id)
      .then((user) => {
        user.favsStores.push(req.params.storeId);
        user.save();
        res.status(201).send(user);
      })
      .catch((err) => next(err));
  },
  deleteFavStore(req, res, next) {
    User.findById({ _id: req.params.id })
      .populate({ path: "favsStores", select: "name" })
      .then((user) => {
        user.favsStores = user.favsStores.filter(
          (e) => e._id != req.params.storeId
        );
        user.save();
        res.send(user);
      })
      .catch((err) => next(err));
  },
};

module.exports = FavouritesControllers;