const { individualClientModel } = require('../models/index.js')
const { matchedData } = require('express-validator')
const { handleHttpError } = require('../utils/handleHttpError.js')

/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */

const getIndividualClients = async (req, res) => {
    try{
        const data = await individualClientModel.find({})
        res.send(data)
    }
    catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_GET_INDIVIDUAL_CLIENTS")
    }
}

const getIndividualClient = async (req, res) => {
    try{
        const {id} = matchedData(req) //Me quedo solo con el id
        const data = await individualClientModel.findById(id)
        res.send(data)
    }
    catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_GET_INDIVIDUAL_CLIENT")
    }
}

const createIndividualClient =  async (req, res) => {
    try{
        //const body = req.body
        const body = matchedData(req)
        const data = await individualClientModel.create(body)
        res.send(data)
    }
    catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_INSERT_INDIVIDUAL_CLIENT")
    }
}

const updateIndividualClient = async (req, res) => {
    try{
        const {id, ...body} = matchedData(req) //Extrae el id y el resto lo asigna a la constante body
        
        const data = await individualClientModel.findByIdAndUpdate(id, body)
        const newData = await individualClientModel.findById(id)
        res.send(newData) 
    }
    catch(err){
        console.log(err)
        handleHttpError(res, 'ERROR_UPDATE_INDIVIDUAL_CLIENT')
    }
}

const deleteIndividualClient = async (req, res) => {

    try{
        const id = req.params.id
        const data = await individualClientModel.deleteOne({_id : id})
        res.send(data)
    }
    catch(err){
        console.log(err)
        handleHttpError(res, 'ERROR_DELETE_INDIVIDUAL_CLIENT')
    }
}

module.exports = { getIndividualClients, getIndividualClient, createIndividualClient, updateIndividualClient, deleteIndividualClient }