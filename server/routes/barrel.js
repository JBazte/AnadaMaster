const express = require("express")
const router = express.Router();
const { getBarrels, insertBarrel, updateBarrel, deleteBarrel } = require("../controllers/barrel.js")
const { validatorCreateBarrel, validatorGetBarrel} = require("../validators/barrel.js")
const checkRol = require("../middleware/rol.js")
const authMiddleware = require("../middleware/session.js")

//get all barrels
router.get("/", authMiddleware.authEmployee, checkRol([1]), getBarrels)

//insert a barrel
router.post("/", authMiddleware.authEmployee, checkRol([1]), validatorCreateBarrel, insertBarrel)

//Modify grape by id
router.put("/:id", authMiddleware.authEmployee,  checkRol([1]), validatorCreateBarrel, updateBarrel)

//Delete grape by id
router.delete("/:id", authMiddleware.authEmployee,  checkRol([1]), validatorGetBarrel, deleteBarrel )

module.exports = router;
