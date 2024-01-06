const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator.js")
const { handleHttpError } = require("../utils/handleHttpError")
const { individualClientModel } = require("../models/index.js")

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

const checkUniquesIndividualClient = async (req, res, next) => {
    
    const client = await individualClientModel.findOne({ NIF: req.body.NIF })

    if(client != null && client.id != req.id)
    {
        handleHttpError(res, "NIF_ALREADY_IN_USE")
        return
    }
    
    next()
}

module.exports = { validatorCreateIndiviualClient, validatorGetIndiviualClient, validatorModifyIndiviualClient, checkUniquesIndividualClient}