const express = require("express")
const router = express.Router();
const { validatorCreateEmployee, validatorLoginEmployee, validatorModifyEmployee, validatorGetEmployee } = require("../validators/employee.js")
const { getEmployees, getEmployee, registerEmployee, loginEmployee, updateEmployee, deleteEmployee } = require("../controllers/employee.js")
const checkRol = require("../middleware/rol.js")
const authMiddleware = require("../middleware/session.js")

//get all employees
router.get("/", authMiddleware.authEmployee, checkRol([1]), getEmployees)

//get employee by ID
router.get("/:id", authMiddleware.authEmployee, checkRol([1]), validatorGetEmployee, getEmployee)

//router.post("/",validatorCreateEmployee ,insertEmployee)
//Insert/register employees
router.post("/", authMiddleware.authEmployee,  checkRol([1]), validatorCreateEmployee ,registerEmployee)

//Modify employee by id
//router.put("/:id", authMiddleware.authEmployee,  checkRol([1]), validatorModifyEmployee, updateEmployee)
router.patch("/:id", authMiddleware.authEmployee,  checkRol([1]), updateEmployee)

//Delete employee by id
router.delete("/:id", authMiddleware.authEmployee,  checkRol([1]), validatorGetEmployee, deleteEmployee )

//Main Login
router.post("/login/", validatorLoginEmployee, loginEmployee)

module.exports = router;