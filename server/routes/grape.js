const express = require("express")
const router = express.Router();
const { getGrapes, insertGrape } = require("../controllers/grape.js")
const { validatorCreateGrape, validatorGetGrape } = require("../validators/grape.js")

router.get("/", getGrapes)

router.post("/", validatorCreateGrape, insertGrape)

module.exports = router;