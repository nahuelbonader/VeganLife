const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt"),
  SALT_WORK_FACTOR = 10;

const validateEmail = function (email) {
  const re = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
  return re.test(email);
};

//Creacion del Schema User

const userSchema = new Schema({
  fuid: { type: String, required: true },
  name: { type: String, required: true },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
  },
  image: { type: String },
  role: {
    type: String,
    enum: ["User", "Store", "SuperAdmin"], // ¿es necesario el Store?
    default: "User",
  },
  address: { type: String },
  favsRecipe: [{ type: Schema.Types.ObjectId, ref: "recipe" }],
  favsProducts: [{ type: Schema.Types.ObjectId, ref: "product" }],
  favsStores: [{ type: Schema.Types.ObjectId, ref: "store" }],
  active: { type: Boolean, default: true },
});

// Hasheo de la contrasena

userSchema.pre("save", function (next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

// Creacion del modelo User
const User = mongoose.model("user", userSchema);

// Exportar el modelo

module.exports = User;
