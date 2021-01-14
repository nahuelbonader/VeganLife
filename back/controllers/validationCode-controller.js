const { AccountValidationCode, User } = require("../db/models/index");
const sendValidationEmail = require("../mail_service/accountValidation");

const ValidationCodeController = {
  create(req, res, next) {
    AccountValidationCode.create({ email: req.body.email })
      .then(({ code, email }) => sendValidationEmail(code, email))
      .then(next)
      .catch(next);
  },
  validate(req, res, next) {
    AccountValidationCode.findOne({ code: req.params.code }).then((user) => {
      if (!user) return res.sendStatus(400);
      User.findOneAndUpdate({ email: user.email })
        .then((user) => console.log(user))
        .then(() => res.sendStatus(200))
        .catch(next);
    });
    // falta borrar el documento con el validation code.
  },
};

module.exports = ValidationCodeController;
