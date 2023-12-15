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
        const body = matchedData(req)
        const data = await grapeModel.create(body)
        res.send(data)
    }catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_INSERT_GRAPE")
    }

}

const updateGrape = async (req, res) => {

    try{
        const id = req.params.id
        const body = matchedData(req)

        const data = await grapeModel.updateOne({ _id: id } , body)

        res.send(data)
        
    }catch(err){
        console.log(err)
        handleHttpError(res, 'ERROR_UPDATE_GRAPE')
    }
}

const deleteGrape = async (req, res) => {

    try{
        const id = req.params.id
        const data = await grapeModel.deleteOne({_id : id})

        res.send(data)
        
    }catch(err){
        console.log(err)
        handleHttpError(res, 'ERROR_DELETE_GRAPE')
    }
}

module.exports = { getGrapes, insertGrape, updateGrape, deleteGrape }