const express = require("express")
const router = express.Router()

const { getBusinesses, getBusiness, createBusiness, updateBusiness, deleteBusiness } = require("../controllers/business")

const { validatorCreateBusiness, validatorGetBusiness, validatorModifyBusiness, checkUniquesBusiness } = require("../validators/business")
const { authEmployee } = require("../middleware/session")
const checkRol = require("../middleware/rol")

//GET ALL BUSINESSES
router.get("/", getBusinesses)

//GET ONE BUSINESS
router.get("/:id", validatorGetBusiness, getBusiness)

//CREATE ONE BUSINESS
router.post("/", checkUniquesBusiness, validatorCreateBusiness, createBusiness)

//EDIT ONE BUSINESS
router.put("/:id", validatorGetBusiness, validatorModifyBusiness, updateBusiness)

//DELETE ONE BUSINESS
router.delete("/:id", validatorGetBusiness, deleteBusiness)

module.exports = router