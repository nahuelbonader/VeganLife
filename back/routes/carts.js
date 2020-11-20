const router = require("express").Router();

const {
    getCart,
    createCart,
    resetCart, 
    setCart,
   

} = require ("../controllers/cartsController")

router.route("/").get(getCart).post(createCart).delete(resetCart).put(setCart);


module.exports = router;
