const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  categoryStore: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  stock: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
    default: true,
  },
  store: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "store",
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;
