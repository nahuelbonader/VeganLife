const { User } = require("../db/models/index");

const UserController = {
  findAll(req, res, next) {
    User.find({ active: true })
      .then((users) => res.send(users))
      .catch((err) => next(err));
  },
  create(req, res, next) {
    User.findOne({ email: req.body.email, active: false })
      .then((user) => {
        return user
          ? User.findByIdAndUpdate(
              user._id,
              { ...req.body, active: true },
              { new: true }
            )
          : User.create(req.body);
      })
      .then((user) => res.status(201).send(user))
      .catch((err) => next(err));
  },
  update(req, res, next) {
    User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updated) => {
        res.status(200).send(updated);
      })
      .catch((err) => next(err));
  },
  delete(req, res, next) {
    User.findByIdAndUpdate(req.params.id, { active: false }, { new: true })
      .then((user) => res.send(user)) // ¿QUÉ PASA SI EL ID NO EXISTE?
      .catch((err) => next(err));
  },
  loginUser(req, res, next) {
    User.findOne({ email: req.body.email })
      .then((user) => {
        if (!user) return res.sendStatus(404);
        user.compareFuid(req.body.fuid).then((isMatch) => {
          if (!isMatch) return res.sendStatus(401);
          return res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            image: user.image,
          });
        });
      })
      .catch((err) => next(err));
  },
  findById(req, res, next) {
    User.findById(req.params.id)
      .populate({ path: "favsRecipes", select: ["image"] })
      .then((user) =>
        user
          ? res.send({
              _id: user._id,
              name: user.name,
              email: user.email,
              image: user.image,
              favsStores: user.favsStores,
              favsRecipes: user.favsRecipes,
              favsProducts: user.favsProducts,
            })
          : res.send(500).end()
      )
      .catch((err) => next(err));
  },
};

module.exports = UserController;
