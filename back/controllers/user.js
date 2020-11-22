const { User, Product} = require('../db/models/index')


const UserController = {
  findAll(req,res,next){
    User.find({active:true})
        .then(users => res.send(users))
        .catch(err => next(err))
  },
  create(req,res,next){
    User.create(req.body)
        .then((user)=> res.send(user))
        .catch(err => next(err))
  },
  update(req,res,next){
    User.findByIdAndUpdate({_id: req.params.id}, req.body,{new: true})
    .then((updated) => {
      res.status(200).send(updated)
    })
    .catch(err => next(err))
  },
  findById(req,res,next){
    User.findById({_id:req.params.id, active:true})
        .then(user => res.send(user))
        .catch(err => next(err))
  },
  delete(req,res,next){
    User.findByIdAndUpdate(req.params.id,{ active: false}, {new: true})
        .then(user => res.send(user))
        .catch(err => next(err))
  },

//--------------------------Favourites------------------------------------------
//--------------------------Products--------------------------------------------
  showFavProducts(req,res,next){
    User.findById({_id:req.params.id})
        .populate({path:"favsProducts",select:"title"})
        .then(user => res.send(user.favsProducts))
        .catch(err => next(err))
  },
  addFavProduct(req,res,next){
    User.findById(req.params.id)
        .then(user => {
            user.favsProducts.push(req.params.productId)
            user.save()
          res.status(201).send(user)
        })
        .catch(err => next(err))
  },


//--------------------------Recipes---------------------------------------------
  showFavRecipes(req,res,next){
    User.findById({_id:req.params.id})
        .populate({path:"favsRecipe",select:"title"})
        .then(user => res.send(user.favsRecipe))
        .catch(err => next(err))
  },

  addFavRecipe(req,res,next){
    User.findById(req.params.id)
        .then(user => {
          user.favsRecipe.push(req.params.recipeId)
          user.save()
          res.status(201).send(user)
        })
        .catch(err => next(err))
  },


//---------------------------Stores---------------------------------------------
  showFavStores(req,res,next){
    User.findById({_id:req.params.id})
        .populate({path:"favsStores",select:"name"})
        .then(user => res.send(user.favsStores))
        .catch(err => next(err))
  },

  addFavSotre(req,res,next){
    User.findById(req.params.id)
        .then(user => {
          user.favsStores.push(req.params.storeId)
          user.save()
          res.status(201).send(user)
        })
        .catch(err => next(err))
  }
}

module.exports = UserController
