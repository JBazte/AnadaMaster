const express = require("express")
const router = express.Router();
const { validatorCreateEmployee } = require("../validators/employee.js")
const { getEmployees, insertEmployee } = require("../controllers/employee.js")


router.get("/", getEmployees)

router.post("/",validatorCreateEmployee ,insertEmployee)

module.exports = router;