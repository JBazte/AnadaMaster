const express = require("express")
const router = express.Router();
const { getGrapes, insertGrape, updateGrape, deleteGrape, getGrape } = require("../controllers/grape.js")
const { validatorCreateGrape, validatorGetGrape } = require("../validators/grape.js")
const checkRol = require("../middleware/rol.js")
const authMiddleware = require("../middleware/session.js")

//get all grapes
router.get("/", authMiddleware.authEmployee, checkRol([1]), getGrapes)

//get grape by ID
router.get("/:id", authMiddleware.authEmployee, checkRol([1]), validatorGetGrape, getGrape)
//insert a grape
router.post("/", authMiddleware.authEmployee, checkRol([1]), validatorCreateGrape, insertGrape)

//Modify grape by id
router.put("/:id", authMiddleware.authEmployee,  checkRol([1]), validatorCreateGrape, updateGrape)

//Delete grape by id
router.delete("/:id", authMiddleware.authEmployee,  checkRol([1]), validatorGetGrape, deleteGrape )

module.exports = router;