const express = require("express")
const router = express.Router()

const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/product")

const {validatorCreateProduct, validatorGetProduct, validatorModifyProduct, checkUniquesProduct} = require("../validators/product")
const {authEmployee} = require("../middleware/session")
const checkRol       = require("../middleware/rol")

//GET ALL PRODUCTS
router.get("/", getProducts)

//GET ONE COMMERCE
router.get("/:id", validatorGetProduct, getProduct)

//CREATE ONE PRODUCT
router.post("/", authEmployee, checkUniquesProduct, validatorCreateProduct, createProduct)

//EDIT ONE PRODUCT
router.put("/:id", authEmployee, validatorGetProduct, checkUniquesProduct, validatorModifyProduct, updateProduct)

//DELETE ONE PRODUCT
router.delete("/:id", authEmployee, validatorGetProduct, deleteProduct)

module.exports = router