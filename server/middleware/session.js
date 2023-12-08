const { employeeModel } = require("../models/index.js")
const { handleHttpError } = require("../utils/handleHttpError")
const { verifyToken } = require("../utils/handleJwt")

const authEmployee = async (req, res, next) => {
    try{
        if (!req.headers.authorization) {
            handleHttpError(res, "NOT_TOKEN_EMPLOYEE", 401)
            return
        }
        // Nos llega la palabra reservada Bearer (es un estándar) y el Token, así que me quedo con la última parte
        const token = req.headers.authorization.split(' ').pop() //.pop() me coge la ultima parte
        //Del token, miramos en Payload (revisar verifyToken de utils/handleJwt)
        const dataToken = await verifyToken(token)
        if(!dataToken.id) {
            handleHttpError(res, "ERROR_ID_TOKEN_EMPLOYEE", 401)
            return
        }

        const employee = await employeeModel.findById(dataToken.id)
        req.employee = employee
        
        next()
    }catch(err){
        console.log(err)
        handleHttpError(res, "NOT_SESSION_EMPLOYEE", 401)
    }
}

module.exports = {authEmployee}