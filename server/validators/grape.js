const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator.js")

const validatorCreateGrape = [
    check("origin").exists().notEmpty().isString(), 
    check("date").exists().notEmpty().isDate(),
    check("weight").exists().notEmpty().isNumeric(),
    check("type" ).exists().notEmpty().isString(),
    check("ripeness").exists().notEmpty().isString(),
    check("cuality").exists().notEmpty().isNumeric(),

    (req, res, next) => validateResults (req, res, next) //next es al que le vamos a pasar el procesamiento, al controller se lo pasamos
]

const validatorGetGrape = [
    check("id").exists().notEmpty(), (req, res, next) => {
        return validateResults(req, res, next)
    }
]

module.exports = { validatorCreateGrape, validatorGetGrape}