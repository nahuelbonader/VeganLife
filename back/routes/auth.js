const router = require("express").Router();
const { findUser } = require("../controllers/users-controller");

router.get("/me/:fuid", findUser);

module.exports = router;
