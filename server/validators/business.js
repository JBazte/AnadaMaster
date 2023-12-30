const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator.js")

const validatorCreateBusiness = [
    check("name").exists().notEmpty().isString(),
    check("address").exists().notEmpty().isString(),
    check("phoneNumber").exists().notEmpty().isString(),
    check("NIF").exists().notEmpty().isString(),
    check("CIF").exists().notEmpty().isString(),
    check("shippingAddress").exists().notEmpty().isString(),
    check("volumeDiscount").exists().notEmpty().isNumeric(),
    (req, res, next) => validateResults (req, res, next) //next es al que le vamos a pasar el procesamiento, al controller se lo pasamos
]

const validatorGetBusiness = [
    check("id").exists().notEmpty(), (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorModifyBusiness = [
    check("name").exists().notEmpty().isString(),
    check("address").exists().notEmpty().isString(),
    check("phoneNumber").exists().notEmpty().isString(),
    check("NIF").exists().notEmpty().isString(),
    check("CIF").exists().notEmpty().isString(),
    check("shippingAddress").exists().notEmpty().isString(),
    check("volumeDiscount").exists().notEmpty().isNumeric(),
    (req, res, next) => validateResults (req, res, next) //next es al que le vamos a pasar el procesamiento, al controller se lo pasamos
]

module.exports = { validatorCreateBusiness, validatorGetBusiness, validatorModifyBusiness}