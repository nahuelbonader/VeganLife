const router = require("express").Router();
const { loginUser } = require("../controllers/users-controller");
const ValidationCodeController = require("../controllers/validationCode-controller");

router.post("/me", loginUser);
router.get(
  "/verification/verify-account/:code",
  ValidationCodeController.validate
);

module.exports = router;
