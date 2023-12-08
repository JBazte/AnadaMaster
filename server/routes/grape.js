const express = require("express")
const router = express.Router();
const { getGrapes, insertGrape } = require("../controllers/grape.js")
const { validatorCreateGrape, validatorGetGrape } = require("../validators/grape.js")
const checkRol = require("../middleware/rol.js")
const authMiddleware = require("../middleware/session.js")

//get all grapes
router.get("/", authMiddleware.authEmployee, checkRol([1]), getGrapes)

//insert a grape
router.post("/", authMiddleware.authEmployee, checkRol([1]), validatorCreateGrape, insertGrape)

module.exports = router;