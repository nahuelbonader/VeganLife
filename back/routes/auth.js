const router = require("express").Router();
const { loginUser } = require("../controllers/users-controller");

router.post("/me", loginUser);

module.exports = router;
