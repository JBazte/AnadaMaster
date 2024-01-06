const { productOrderModel, productModel } = require('../models/index.js')
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

const createProductOrder = async (req, res) => {
    try {
        const body = matchedData(req);

        const discount = body.discount;
        const basket = body.basket;
        let totalPrice = 0;

        for (const productName in basket) {
            if (basket.hasOwnProperty(productName)) {
                try {
                    // Encuentra el producto en la base de datos
                    const product = await productModel.findOne({ 'name': productName })
        
                    // Si el producto se encuentra, agrega su precio al total
                    if (product) {
                        totalPrice += product.priceInEuro * basket[productName]
                    } else {
                        console.error('Product not found with the name: ${productName}')
                    }
                } catch (error) {
                    console.error('Error al buscar producto en la base de datos: ${error}')
                }
            }
        }
        // Añade el descuento al precio total
        totalPrice -= totalPrice * discount/100;

        // Crea el objeto ProductOrder con el precio total actualizado
        const data = await productOrderModel.create({
            ...body,
            totalPrice: totalPrice
        })

        res.send(data);
    } catch (err) {
        console.error(err);
        handleHttpError(res, "ERROR_INSERT_PRODUCT_ORDER");
    }
}

const updateProductOrder = async (req, res) => {
    try{
        const {id, ...body} = matchedData(req) //Extrae el id y el resto lo asigna a la constante body

        const discount = body.discount;
        const basket = body.basket;
        let totalPrice = 0;

        for (const productName in basket) {
            if (basket.hasOwnProperty(productName)) {
                try {
                    // Encuentra el producto en la base de datos
                    const product = await productModel.findOne({ 'name': productName })
        
                    // Si el producto se encuentra, agrega su precio al total
                    if (product) {
                        totalPrice += product.priceInEuro * basket[productName]
                    } else {
                        console.error('Product not found with the name: ${productName}')
                    }
                } catch (error) {
                    console.error('Error al buscar producto en la base de datos: ${error}')
                }
            }
        }
        // Añade el descuento al precio total
        totalPrice -= totalPrice * discount/100;

        // Crea el objeto ProductOrder con el precio total actualizado
        const data = await productOrderModel.findByIdAndUpdate(id, {
            ...body,
            totalPrice: totalPrice
        });

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