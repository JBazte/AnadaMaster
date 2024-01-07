const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator.js")

const validatorCreateBarrel = [
    check("barrelOrigin").exists().notEmpty().isString(),
    check("quantity").exists().notEmpty().isNumeric(),

    (req, res, next) => validateResults(req, res, next) //next es al que le vamos a pasar el procesamiento, al controller se lo pasamos
]

const validatorGetBarrel = [
    check("id").exists().notEmpty(), (req, res, next) => {
        return validateResults(req, res, next)
    }
]

module.exports = { validatorCreateBarrel, validatorGetBarrel }