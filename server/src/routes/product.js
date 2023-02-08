const express = require("express")
const router = express.Router();

const {productController} = require("../controllers")

router.get("/v1",productController.getProduct)
router.post("/v2",productController.addProduct)
router.post("/name",productController.getProductByName)
module.exports = router;