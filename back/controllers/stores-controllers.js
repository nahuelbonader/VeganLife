const { Store } = require("../db/models");

const storeController = {
  createStore(req, res, next) {
    Store.findOne({ email: req.body.email, active: false })
      .then((store) => {
        if (store) {
          return Store.findByIdAndUpdate(
            store._id,
            { ...req.body, active: true },
            { new: true }
          );
        } else {
          return Store.create(req.body);
        }
      })
      .then((store) => {
        res.status(201).send(store);
      })
      .catch((err) => next(err));
  },

  updateStore(req, res, next) {
    Store.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .then(store=> store.populate({ path: "admins", select:['name','image']}).execPopulate())
      .then((store) => {
        res.status(201).send(store);
      })
      .catch((err) => next(err));
  },

  deleteStore(req, res, next) {
    Store.findByIdAndUpdate(req.params.id, { active: false }, { new: true })
      .then((store) => {
        res.status(201).send(store);
      })
      .catch((err) => next(err));
  },

  findAllStores(req, res, next) {
    Store.find({ active: true })
      .populate({ path: "admins", select:['name','image']})
      .then((store) => {
        res.status(200).send(store);
      })
      .catch((err) => next(err));
  },

  findOneStore(req, res, next) {
    Store.findById(req.params.id)
      .populate({ path: "admins", select:['name','image']})
      .then((store) => {
        res.status(200).send(store);
      })
      .catch((err) => next(err));
  },
  
};

module.exports = storeController;
