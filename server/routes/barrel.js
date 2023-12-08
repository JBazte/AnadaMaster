const express = require("express")
const router = express.Router();
const { getBarrels, insertBarrel } = require("../controllers/barrel.js")
const { validatorCreateBarrel, validatorGetBarrel} = require("../validators/barrel.js")

router.get("/", getBarrels)

router.post("/", validatorCreateBarrel, insertBarrel)

module.exports = router;