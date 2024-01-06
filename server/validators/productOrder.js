const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator.js")

const validatorCreateProductOrder = [
    check("idClient").exists().notEmpty().isString(),
    check("basket").exists(),
    check("status").exists().notEmpty().isString(),
    check("discount").exists().notEmpty().isNumeric(),
    (req, res, next) => validateResults (req, res, next) //next es al que le vamos a pasar el procesamiento, al controller se lo pasamos
]

const validatorGetProductOrder = [
    check("id").exists().notEmpty(), (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorModifyProductOrder = [
    check("idClient").exists().notEmpty().isString(),
    check("basket").exists(),
    check("status").exists().notEmpty().isString(),
    check("discount").exists().notEmpty().isNumeric(),
    (req, res, next) => validateResults (req, res, next) //next es al que le vamos a pasar el procesamiento, al controller se lo pasamos
]

module.exports = { validatorCreateProductOrder, validatorGetProductOrder, validatorModifyProductOrder }