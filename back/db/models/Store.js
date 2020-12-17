const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const validateEmail = function (email) {
  const re = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
  return re.test(email);
};

const storeSchema = new Schema({
  superAdmin: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },

  admins: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
  },

  image: { type: String },

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

  description: { type: String },

  productsCategories: [
    {
      type: String,
    },
  ],

  delivery: {
    type: Boolean,
    required: true,
  },

  accepted: {
    type: Boolean,
    required: false,
    default: false,
  },

  open: [
    {
      open: Boolean,
      startMorning: { type: Number },
      endMorning: { type: Number },
      startNoon: { type: Number },
      endNoon: { type: Number },
    },
  ],

  active: {
    type: Boolean,
    required: true,
    default: true,
  },

  location: {
    lat: {
      type: Number,
      required: true
    },
    lng: {
      type: Number,
      required: true
    }
  }
});

const Store = mongoose.model("store", storeSchema);
module.exports = Store;
