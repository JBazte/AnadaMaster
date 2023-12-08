const { employeeModel } = require('../models/index.js')
const { matchedData } = require('express-validator')
const { handleHttpError } = require('../utils/handleHttpError.js')

/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */

const getEmployees = async (req, res) => {
    try{
        const data = await employeeModel.find().lean();
        res.send(data)
    }catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_GET_EMPLOYEES")
    }
}

/**
 * Inserta un registro
 * @param {*} req 
 * @param {*} res 
 */
const insertEmployee = async (req, res) => {
    try{
        //matchedData solo funciona con un validator; si no no va a funcionar
        //const body = matchedData(req) //el dato filtrado por el modelo 
        const body = req.body
        const data = await employeeModel.create(body)
        
        res.send(data)
    }catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_CREATE_EMPLOYEE")
    }
}

module.exports = { getEmployees, insertEmployee }