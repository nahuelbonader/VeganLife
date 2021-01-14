const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cryptoRandomString = require("crypto-random-string");

const accountValidationCodeSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    // required: true,
  },
  // dateCreated: {
  //   type: Date,
  //   default: Date.now(),
  //   expires: 600,
  // },
});

accountValidationCodeSchema.pre("save", function (next) {
  cryptoRandomString
    .async({ length: 128 })
    .then((randomString) => {
      this.code = randomString;
      next();
    })
    .catch((err) => next(err));
});

const AccountValidationCode = mongoose.model(
  "accountValidationCode",
  accountValidationCodeSchema
);

module.exports = AccountValidationCode;
