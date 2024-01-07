const { barrelModel } = require('../models/index.js')
const { matchedData } = require('express-validator')
const { handleHttpError } = require('../utils/handleHttpError.js')

/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */

const getBarrels = async (req, res) => {
    try{
        const data = await barrelModel.find().lean() //las llaves {} vacías significa que me coja todo
        res.send(data)
    }catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_GET_BARRELS")
    }
}

const getBarrel = async (req, res) => {
    try{
        const {id} = matchedData(req)
        const data = await barrelModel.findById(id)
        res.send(data)
    }catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_GET_BARRELS")
    }
}

const insertBarrel =  async (req, res) => {

    try{
        //const body = req.body
        const body = matchedData(req)
        const data = await barrelModel.create(body)
        res.send(data)
    }catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_INSERT_BARREL")
    }

}

const updateBarrel = async (req, res) => {

    try{
        const id = req.params.id
        const body = matchedData(req)

        const data = await barrelModel.updateOne({ _id: id } , body)

        res.send(data)
        
    }catch(err){
        console.log(err)
        handleHttpError(res, 'ERROR_UPDATE_BARREL')
    }
}

const deleteBarrel = async (req, res) => {

    try{
        const id = req.params.id
        const data = await barrelModel.deleteOne({_id : id})

        res.send(data)
        
    }catch(err){
        console.log(err)
        handleHttpError(res, 'ERROR_DELETE_BARREL')
    }
}


module.exports = { getBarrels, getBarrel, insertBarrel, updateBarrel, deleteBarrel }