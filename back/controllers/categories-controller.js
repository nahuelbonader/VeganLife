const { Category } = require("../db/models");

const categoriesController = {
  findCategories(req, res, next) {
    Category.find({ active: true })
      .then((categories) => res.status(200).send(categories))
      .catch((err) => next(err));
  },
  createCategory(req, res, next) {
    Category.findOne({ name: req.body.name, active: false })
      .then((category) => {
        if (category) {
          category.active = true;
          category.image = req.body.image;
          return category.save();
        } else {
          return Category.create(req.body);
        }
      })
      .then((category) => res.status(201).send(category))
      .catch((err) => next(err));
  },
  updateCategory(req, res, next) {
    Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .then((category) => res.status(200).send(category))
      .catch((err) => next(err));
  },
  deleteCategory(req, res) {
    Category.findByIdAndUpdate(req.params.id, { active: false }, { new: true })
      .then((category) => res.status(200).send(category))
      .catch((err) => next(err));
  },
};

module.exports = categoriesController;
