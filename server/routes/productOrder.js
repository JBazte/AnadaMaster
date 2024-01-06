const express = require("express")
const router = express.Router()

const { getProductOrders, getProductOrder, createProductOrder, updateProductOrder, deleteProductOrder } = require("../controllers/productOrder")

const {validatorCreateProductOrder, validatorGetProductOrder, validatorModifyProductOrder } = require("../validators/productOrder")
const {authEmployee} = require("../middleware/session")
const checkRol       = require("../middleware/rol")

//GET ALL PRODUCT ORDERS
router.get("/", getProductOrders)

//GET ONE PRODUCT ORDER
router.get("/:id", validatorGetProductOrder, getProductOrder)

//CREATE ONE PRODUCT ORDER
router.post("/", authEmployee, validatorCreateProductOrder, createProductOrder)

//EDIT ONE PRODUCT ORDER
router.put("/:id", authEmployee, validatorGetProductOrder, validatorModifyProductOrder, updateProductOrder)

//DELETE ONE PRODUCT ORDER
router.delete("/:id", authEmployee, validatorGetProductOrder, deleteProductOrder)

module.exports = router