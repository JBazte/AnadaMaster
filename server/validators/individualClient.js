const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator.js")

const validatorCreateIndiviualClient = [
    check("name").exists().notEmpty().isString(),
    check("surname" ).exists().notEmpty().isString(),
    check("address").exists().notEmpty().isString(),
    check("phoneNumber").exists().notEmpty().isString(),
    check("NIF").exists().notEmpty().isString(),
    (req, res, next) => validateResults (req, res, next) //next es al que le vamos a pasar el procesamiento, al controller se lo pasamos
]

const validatorGetIndiviualClient = [
    check("id").exists().notEmpty(), (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorModifyIndiviualClient = [
    check("name").exists().notEmpty().isString(),
    check("surname" ).exists().notEmpty().isString(),
    check("address").exists().notEmpty().isString(),
    check("phoneNumber").exists().notEmpty().isString(),
    check("NIF").exists().notEmpty().isString(),
    (req, res, next) => validateResults (req, res, next) //next es al que le vamos a pasar el procesamiento, al controller se lo pasamos
]

module.exports = { validatorCreateIndiviualClient, validatorGetIndiviualClient, validatorModifyIndiviualClient}