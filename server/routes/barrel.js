const express = require("express")
const router = express.Router();
const { getBarrels, insertBarrel } = require("../controllers/barrel.js")
const { validatorCreateBarrel, validatorGetBarrel} = require("../validators/barrel.js")
const checkRol = require("../middleware/rol.js")
const authMiddleware = require("../middleware/session.js")

//get all barrels
router.get("/", authMiddleware.authEmployee, checkRol([1]), getBarrels)

//insert a barrel
router.post("/", authMiddleware.authEmployee, checkRol([1]), validatorCreateBarrel, insertBarrel)

module.exports = router;