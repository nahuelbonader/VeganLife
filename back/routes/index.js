const router = require("express").Router();

router.use("/users", require ("./users"));
router.use("/categories", require("./categories"));
router.use("/products", require("./products"));
router.use("/purchases", require("./purchases"));
router.use("/recipes", require("./recipes"));
router.use("/stores", require("./stores"));
router.use("/carts", require("./carts"));


module.exports = router;
