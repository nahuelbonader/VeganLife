const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt"),
  SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
  fuid: { type: String, required: true },
  name: { type: String, required: true },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
  },
  image: { type: String },
  role: {
    type: String,
    enum: ["User", "Store", "SuperAdmin"], // ¿es necesario el Store?
    default: "User",
  },
  address: { type: String },
  favsRecipes: [{ type: Schema.Types.ObjectId, ref: "recipe" }],
  favsProducts: [{ type: Schema.Types.ObjectId, ref: "product" }],
  favsStores: [{ type: Schema.Types.ObjectId, ref: "store" }],
  active: { type: Boolean, default: true },
});

userSchema.pre("save", function (next) {
  bcrypt
    .genSalt(SALT_WORK_FACTOR)
    .then((salt) => bcrypt.hash(this.fuid, salt))
    .then((fuidHashed) => {
      this.fuid = fuidHashed;
      next();
    })
    .catch((err) => next(err));
});

userSchema.methods.compareFuid = (candidateFuid) =>
  bcrypt
    .compare(candidateFuid, this.fuid)
    .then((isMatch) => isMatch)
    .catch((err) => err);

const User = mongoose.model("user", userSchema);

module.exports = User;
