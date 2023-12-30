const { productOrderModel } = require('../models/index.js')
const { matchedData } = require('express-validator')
const { handleHttpError } = require('../utils/handleHttpError.js')

/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */

const getProductOrders = async (req, res) => {
    try{
        const data = await productOrderModel.find({})
        res.send(data)
    }
    catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_GET_PRODUCT_ORDERS")
    }
}

const getProductOrder = async (req, res) => {
    try{
        const {id} = matchedData(req) //Me quedo solo con el id
        const data = await productOrderModel.findById(id)
        res.send(data)
    }
    catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_GET_PRODUCT_ORDER")
    }
}

const createProductOrder =  async (req, res) => {
    try{
        //const body = req.body
        const body = matchedData(req)
        const data = await productOrderModel.create(body)
        res.send(data)
    }
    catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_INSERT_PRODUCT_ORDER")
    }
}

const updateProductOrder = async (req, res) => {
    try{
        const {id, ...body} = matchedData(req) //Extrae el id y el resto lo asigna a la constante body
        
        const data = await productOrderModel.findByIdAndUpdate(id, body)
        const newData = await productOrderModel.findById(id)
        res.send(newData) 
    }
    catch(err){
        console.log(err)
        handleHttpError(res, 'ERROR_UPDATE_PRODUCT_ORDER')
    }
}

const deleteProductOrder = async (req, res) => {

    try{
        const id = req.params.id
        const data = await productOrderModel.deleteOne({_id : id})
        res.send(data)
    }
    catch(err){
        console.log(err)
        handleHttpError(res, 'ERROR_DELETE_PRODUCT_ORDER')
    }
}

module.exports = { getProductOrders, getProductOrder, createProductOrder, updateProductOrder, deleteProductOrder }