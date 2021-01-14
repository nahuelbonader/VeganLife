const router = require("express").Router();
const UserController = require("../controllers/users-controller");
const ValidationCodeController = require("../controllers/validationCode-controller");

router
  .route("/")
  .get(UserController.findAll)
  .post(ValidationCodeController.create, UserController.create);
router
  .route("/:id")
  .get(UserController.findById)
  .put(UserController.update)
  .delete(UserController.delete);

module.exports = router;
