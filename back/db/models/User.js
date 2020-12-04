const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt"),
SALT_WORK_FACTOR = 10;


//Creacion del Schema User

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

// Hasheo de la contrasena

userSchema.pre("save", function (next) {
  const user = this;

  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.fuid, salt, function (err, hash) {
      if (err) return next(err);
      user.fuid = hash;
      next();
    });
  });
});

userSchema.methods.compareFuid = function (candidateFuid, cb) {
  bcrypt.compare(candidateFuid, this.fuid, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

// Creacion del modelo User
const User = mongoose.model("user", userSchema);

// Exportar el modelo

module.exports = User;
