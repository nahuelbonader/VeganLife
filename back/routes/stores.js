const router = require("express").Router();
const { findOneStore, findAllStores, deleteStore, updateStore, createStore } = require("../controllers/stores-controllers");

router.route("/").get(findAllStores).post(createStore);
router.route("/:id").put(updateStore).delete(deleteStore).get(findOneStore);

module.exports = router;
