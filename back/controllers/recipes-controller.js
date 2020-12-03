const { Recipe } = require("../db/models");

const recipeController = {
  findRecipes(req, res, next) {
    Recipe.find({ active: true })
      .populate({ path: "owner", select: ["name", "image"] })
      .populate({ path: "category", select: ["name", "image"] })
      .then((recipes) => res.status(200).send(recipes))
      .catch((err) => next(err));
  },
  createRecipe(req, res, next) {
    Recipe.create(req.body)
      .then((recipe) =>
        recipe
          .populate({ path: "owner", select: ["name", "image"] })
          .populate({ path: "category", select: "name" })
          .execPopulate()
      )
      .then((recipe) => res.status(200).send(recipe))
      .catch((err) => next(err));
  },
  updateRecipe(req, res, next) {
    Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .then((recipe) =>
        recipe
          .populate({ path: "owner", select: ["name", "image"] })
          .populate({ path: "category", select: "name" })
          .execPopulate()
      )
      .then((recipe) => res.status(200).send(recipe))
      .catch((err) => next(err));
  },
  deleteRecipe(req, res, next) {
    Recipe.findByIdAndUpdate(req.params.id, { active: false }, { new: true })
      .then((recipe) => res.status(200).send(recipe))
      .catch((err) => next(err));
  },
  findRecipe(req, res, next) {
    Recipe.findById(req.params.id)
      .populate({ path: "owner", select: ["name", "image"] })
      .populate({ path: "category", select: "name" })
      .then((recipe) => {
        console.log(recipe);
        res.send(recipe);
      })
      .catch((err) => next(err));
  },
};

module.exports = recipeController;
