const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator.js")

const validatorCreateProduct = [
    check("priceInEuro").exists().notEmpty().isNumeric(),
    check("priceInDollar").exists().notEmpty().isNumeric(), 
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
    check("priceInDollar").exists().notEmpty().isNumeric(), 
    check("description").exists().notEmpty().isString(),
    check("format").exists().notEmpty().isString(),
    check("harvest").exists().notEmpty().isDate(),
    check("quantity").exists().notEmpty().isNumeric(), 
    (req, res, next) => validateResults (req, res, next) //next es al que le vamos a pasar el procesamiento, al controller se lo pasamos
]

module.exports = { validatorCreateProduct, validatorGetProduct, validatorModifyProduct}