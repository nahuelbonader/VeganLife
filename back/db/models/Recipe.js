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
  ingredients: [
    {
      quantity: {
        type: String,
      },
      ingredient: {
        type: String,
        required: true,
      },
    },
  ],
  instructions: [
    {
      type: String,
      required: true,
    },
  ],
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
    default: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Recipe = mongoose.model("recipe", recipeSchema);
module.exports = Recipe;
