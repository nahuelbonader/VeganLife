const express = require("express")
const router = express.Router()
const ProductController = require("../controllers/product")

router.get("/", ProductController.findAll)
router.get("/:id", ProductController.findById)
router.post("/", ProductController.create)
router.put("/:id", ProductController.update)
router.put("/delete/:id", ProductController.delete)

module.exports = router
