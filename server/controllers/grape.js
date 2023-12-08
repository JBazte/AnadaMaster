const { grapeModel } = require('../models/index.js')
const { matchedData } = require('express-validator')
const { handleHttpError } = require('../utils/handleHttpError.js')

/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */

const getGrapes = async (req, res) => {
    try{
        const data = await grapeModel.find().lean() //las llaves {} vacías significa que me coja todo
        res.send(data)
    }catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_GET_GRAPES")
    }
}

const insertGrape = async (req, res) => {

    try{
        const body = req.body
        const data = await grapeModel.create(body)
        res.send(data)
    }catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_INSERT_GRAPE")
    }

}

module.exports = { getGrapes, insertGrape }