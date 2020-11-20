const express = require("express")
const router = express.Router()
const UserController = require('../controllers/user')

router.get("/", UserController.findAll)
router.get("/:id", UserController.findById)
router.post("/", UserController.create)
router.put("/:id", UserController.update)
router.put("/delete/:id", UserController.delete)


module.exports = router
