const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator.js")

const validatorCreateEmployee = [
    check("socialSecurityNumber").exists().notEmpty().isNumeric(), 
    check("nif").exists().notEmpty().isString(),
    check("name").exists().notEmpty().isString(),
    check("surname" ).exists().notEmpty().isString(),
    check("birthdate").exists().notEmpty().isDate(),
    check("domicile").exists().notEmpty().isString(),
    check("address").exists().notEmpty().isString(),
    check("phoneNumber").exists().notEmpty().isString(),
    check("contact").exists().notEmpty().isString(),
    check("employeeStatus").exists().notEmpty().isString(),
    check("entryDate").exists().notEmpty().isDate(),
    check("numOfChildren").exists().notEmpty().isNumeric(),
    check("maritalStatus").exists().notEmpty().isString(),
    check("horoscope").exists().notEmpty().isString(),
    check("admin").exists().notEmpty().isNumeric(),
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isString(),
    (req, res, next) => validateResults (req, res, next) //next es al que le vamos a pasar el procesamiento, al controller se lo pasamos
]

const validatorGetEmployee = [
    check("id").exists().notEmpty(), (req, res, next) => {
        return validateResults(req, res, next)
    }
]

const validatorLoginEmployee = [
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isString().isLength( {min:5, max: 16} ),
    (req, res, next) => validateResults (req, res, next) //next es al que le vamos a pasar el procesamiento, al controller se lo pasamos
]


const validatorModifyEmployee = [

    check("socialSecurityNumber").exists().notEmpty().isNumeric(), 
    check("nif").exists().notEmpty().isString(),
    check("name").exists().notEmpty().isString(),
    check("surname" ).exists().notEmpty().isString(),
    check("birthdate").exists().notEmpty().isDate(),
    check("domicile").exists().notEmpty().isString(),
    check("address").exists().notEmpty().isString(),
    check("phoneNumber").exists().notEmpty().isString(),
    check("contact").exists().notEmpty().isString(),
    check("employeeStatus").exists().notEmpty().isString(),
    check("entryDate").exists().notEmpty().isDate(),
    check("numOfChildren").exists().notEmpty().isNumeric(),
    check("maritalStatus").exists().notEmpty().isString(),
    check("horoscope").exists().notEmpty().isString(),
    check("admin").exists().notEmpty().isNumeric(),
    (req, res, next) => validateResults (req, res, next) //next es al que le vamos a pasar el procesamiento, al controller se lo pasamos
]

module.exports = { validatorCreateEmployee, validatorGetEmployee, validatorLoginEmployee, validatorModifyEmployee}