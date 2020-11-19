const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  ingredients: [{
    type: String,
    required: true,
  }],
  instructions: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "category",
  },
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  },
});


const Recipe = mongoose.model("recipe", recipeSchema);
module.exports = Recipe;