const { Store, User } = require("../db/models");

const storeController = {

    createStore(req, res, next){
        Store.findOne({email: req.body.email, active: false})
        .then((store)=>{
            if(store){
            return Store.findByIdAndUpdate(store._id, req.body, {new: true}) 
            }else{
               return Store.create(req.body)
            }
        })
        .then((store)=>{
            res.status(201).send(store)
        })
        .catch((err) => next(err))
    },

    updateStore(req, res, next){
        Store.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then((store)=>{
            res.status(201).send(store)
        })
        .catch((err) => next(err))
    },

    deleteStore(req, res, next){
        Store.findByIdAndUpdate(req.params.id, {active: false}, {new: true})
        .then((store)=>{
            res.status(201).send(store)
        })
        .catch((err) => next(err))
    },

    findAllStores(req, res, next){
        Store.find({ active: true })
        .then((store)=>{
            res.status(200).send(store)
        })
        .catch((err) => next(err))
    },

    findOneStore (req, res, next){
        Store.findById(req.params.id)
        .then((store)=>{
            res.status(200).send(store)
        })
        .catch((err) => next(err))
    },
}

module.exports = storeController;