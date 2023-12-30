const { businessModel } = require('../models/index.js')
const { matchedData } = require('express-validator')
const { handleHttpError } = require('../utils/handleHttpError.js')

/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */

const getBusinesses = async (req, res) => {
    try{
        const data = await businessModel.find({})
        res.send(data)
    }
    catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_GET_BUSINESSES")
    }
}

const getBusiness = async (req, res) => {
    try{
        const {id} = matchedData(req) //Me quedo solo con el id
        const data = await businessModel.findById(id)
        res.send(data)
    }
    catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_GET_BUSINESS")
    }
}

const createBusiness =  async (req, res) => {
    try{
        //const body = req.body
        const body = matchedData(req)
        const data = await businessModel.create(body)
        res.send(data)
    }
    catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_INSERT_BUSINESS")
    }
}

const updateBusiness = async (req, res) => {
    try{
        const {id, ...body} = matchedData(req) //Extrae el id y el resto lo asigna a la constante body
        
        const data = await businessModel.findByIdAndUpdate(id, body)
        const newData = await businessModel.findById(id)
        res.send(newData) 
    }
    catch(err){
        console.log(err)
        handleHttpError(res, 'ERROR_UPDATE_BUSINESS')
    }
}

const deleteBusiness = async (req, res) => {

    try{
        const id = req.params.id
        const data = await businessModel.deleteOne({_id : id})
        res.send(data)
    }
    catch(err){
        console.log(err)
        handleHttpError(res, 'ERROR_DELETE_BUSINESS')
    }
}

module.exports = { getBusinesses, getBusiness, createBusiness, updateBusiness, deleteBusiness }