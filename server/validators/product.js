const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator.js")
const { handleHttpError } = require("../utils/handleHttpError")
const { productModel } = require("../models/index.js")

const validatorCreateProduct = [
    check("name").exists().notEmpty().isString(),
    check("priceInEuro").exists().notEmpty().isNumeric(),
    check("description").exists().notEmpty().isString(),
    check("format").exists().notEmpty().isString(),
    check("harvest").exists().notEmpty().isDate(),
    check("quantity").exists().notEmpty().isNumeric(), 
    (req, res, next) => validateResults (req, res, next) //next es al que le vamos a pasar el procesamiento, al controller se lo pasamos
]

const validatorGetProduct = [
    check("id").exists().notEmpty(), (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorModifyProduct = [
    check("priceInEuro").exists().notEmpty().isNumeric(),
    check("description").exists().notEmpty().isString(),
    check("format").exists().notEmpty().isString(),
    check("harvest").exists().notEmpty().isDate(),
    check("quantity").exists().notEmpty().isNumeric(), 
    (req, res, next) => validateResults (req, res, next) //next es al que le vamos a pasar el procesamiento, al controller se lo pasamos
]

const checkUniquesProduct = async (req, res, next) => {
    
    const product = await productModel.findOne({ name: req.body.name })

    if(product != null && product.id != req.id)
    {
        handleHttpError(res, "PRODUCT_NAME_ALREADY_IN_USE")
        return
    }
    
    next()
}

module.exports = { validatorCreateProduct, validatorGetProduct, validatorModifyProduct, checkUniquesProduct}