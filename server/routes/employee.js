const express = require("express")
const router = express.Router();
const { validatorCreateEmployee, validatorLoginEmployee } = require("../validators/employee.js")
const { getEmployees, registerEmployee, loginEmployee } = require("../controllers/employee.js")
const checkRol = require("../middleware/rol.js")
const authMiddleware = require("../middleware/session.js")

//get all employees
router.get("/", authMiddleware.authEmployee, checkRol([1]), getEmployees)

//router.post("/",validatorCreateEmployee ,insertEmployee)
//Insert/register employees
router.post("/", authMiddleware.authEmployee,  checkRol([1]), validatorCreateEmployee ,registerEmployee)

//Main Login
router.post("/login/", validatorLoginEmployee, loginEmployee)

module.exports = router;