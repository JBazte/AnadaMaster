const { productModel } = require('../models/index.js')
const { matchedData } = require('express-validator')
const { handleHttpError } = require('../utils/handleHttpError.js')

/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */

const getProducts = async (req, res) => {
    try{
        const data = await productModel.find({})
        res.send(data)
    }
    catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_GET_PRODUCTS")
    }
}

const getProduct = async (req, res) => {
    try{
        const {id} = matchedData(req) //Me quedo solo con el id
        const data = await productModel.findById(id)
        res.send(data)
    }
    catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_GET_PRODUCTS")
    }
}

const createProduct =  async (req, res) => {
    try{
        //const body = req.body
        const body = matchedData(req)
        const priceInDollars = body.priceInEuro * 1.1

        const data = await productModel.create({
            ...body,
            priceInDollar: priceInDollars
        });
        res.send(data)
    }
    catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_INSERT_PRODUCT")
    }
}

const updateProduct = async (req, res) => {
    try{
        const {id, ...body} = matchedData(req) //Extrae el id y el resto lo asigna a la constante body
        const priceInDollars = body.priceInEuro * 1.1

        const data = await productModel.findByIdAndUpdate(id, {
            ...body,
            priceInDollar: priceInDollars
        });
        const newData = await productModel.findById(id)
        res.send(newData) 
    }
    catch(err){
        console.log(err)
        handleHttpError(res, 'ERROR_UPDATE_PRODUCT')
    }
}

const deleteProduct = async (req, res) => {

    try{
        const id = req.params.id
        const data = await productModel.deleteOne({_id : id})
        res.send(data)
    }
    catch(err){
        console.log(err)
        handleHttpError(res, 'ERROR_DELETE_PRODUCT')
    }
}

/*
const deleteCommerce = async (req, res) => {
    try{
        const { id } = matchedData(req)
        const data = await commerceModel.delete({_id:id})
        res.send(data)
    }
    catch(err){
        console.log(err)
        handleHttpError(res, 'ERROR_DELETE_COMMERCE', 403)
    }
}
*/

module.exports = { getProducts, getProduct, createProduct, updateProduct, deleteProduct }