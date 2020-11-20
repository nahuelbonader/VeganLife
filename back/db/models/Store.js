const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new Schema({
  superAdmin : {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },

  admins : [{
    type : Schema.Types.ObjectId,
    ref : "user"
     }],

  address: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },

  CUIL: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  productsCategories : [{
    type: String,
    required: true
  }],

  delivery: {
    type: Boolean,
    required: true,
  },

  accepted: {
    type: Boolean,
    required: true,
  },

  active: {
    type: Boolean,
    required: true,
    default: true
  },
});


const Store = mongoose.model("store", storeSchema);
module.exports = Store;
