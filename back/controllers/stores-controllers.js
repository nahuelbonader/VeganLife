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
      .populate("open")
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
  addNewAdmin(req, res, next){
    const {storeId, adminId} = req.params
    Store.findById(storeId)
         .populate({ path: "admins", select:['name','image']})
         .then((store)=>{
           let bool = true
           store.admins.map((el)=>{
             if (el._id == adminId) bool = false
           })
          if(bool){
            store.admins.push(adminId)
            store.save()
            res.status(201).send(store.admins)
         }
          else {
          res.sendStatus(208)
          }
         })
         .catch((err) => next(err))
  },
  deleteAnAdmin(req, res, next){
    const { storeId, adminId } = req.params
    Store.findById(storeId)
         .populate({ path: "admins", select:'name'})
         .then((store)=>{
           store.admins = store.admins.filter((el)=> el._id != adminId)
           store.save()
           res.send(store.admins)
         })
         .catch((err) => next(err))
  }
};

module.exports = storeController;
