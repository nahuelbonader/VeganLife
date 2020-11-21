const router = require("express").Router();
const usersRoutes = require('./users')
const productsRoutes = require("./products")

router.use('/users', usersRoutes)
router.use('/products', productsRoutes)

router.use("/users", require ("./users"));
router.use("/categories", require("./categories"));
router.use("/products", require("./products"));
router.use("/purchases", require("./purchases"));
router.use("/recipes", require("./recipes"));
router.use("/stores", require("./stores"));
router.use("/carts", require("./carts"));


module.exports = router;
