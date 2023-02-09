const express = require ("express")
const router = express.Router()

const {transController} = require("../controllers")

router.get("/",transController.getTransaction)

module.exports = router;