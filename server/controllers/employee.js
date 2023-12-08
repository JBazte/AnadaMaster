const { employeeModel } = require('../models/index.js')
const { matchedData } = require('express-validator')
const { handleHttpError } = require('../utils/handleHttpError.js')
const { encrypt, compare } = require("../utils/handlePassword")
const { tokenSign } = require('../utils/handleJwt.js')

/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */

const getEmployees = async (req, res) => {
    try{
        const data = await employeeModel.find().lean();
        let employees = []

        for(var i=0; i< data.length; i++){
           var employeeAux = { socialSecurityNumber : data[i].socialSecurityNumber,
                            nif : data[i].nif,
                            name :   data[i].name, 
                            surname :   data[i].surname,
                            birthdate :   data[i].birthdate,
                            domicile :  data[i].domicile,
                            address :   data[i].address,
                            phoneNumber :   data[i].phoneNumber,
                            contact :   data[i].contact,
                            employeeStatus :  data[i].employeeStatus,
                            entryDate :   data[i].entryDate,
                            numOfChildren :   data[i].numOfChildren,
                            maritalStatus :   data[i].maritalStatus,
                            horoscope :   data[i].horoscope,
                            email :   data[i].email,
                            admin :   data[i].admin }

            employees.push(employeeAux)
        }
        res.send(employees)
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
        const body = matchedData(req)
        const data = await employeeModel.create(body)
        
        res.send(data)
    }catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_CREATE_EMPLOYEE")
    }
}

const registerEmployee = async (req, res) => {

    try{
        req = matchedData(req)
        const password = await encrypt(req.password)
        const body = {...req, password} // Con "..." duplicamos el objeto y le añadimos o sobreescribimos una propiedad
        const employee = await employeeModel.create(body)
        employee.set("password", undefined, {strict:false}) //Si no queremos que se muestre el hash en la respuesta
    
        //le damos un token al usuario
        const data = {
            token: await tokenSign(employee),
            employee: employee
        }
        res.send(data)

    }catch(err){
        console.log(err)
        handleHttpError(res, 'ERROR_REGISTER_EMPLOYEE')
    }
}


const loginEmployee = async (req, res) => {
    try {
        req = matchedData(req)
        const employee = await employeeModel.findOne({email : req.email})
        if(!employee){
            handleHttpError(res, "EMPLOYEE_NOT_EXISTS", 404)
            return
        }

        const hashPassword = employee.password;
        const check = await compare(req.password, hashPassword)
        if(!check){
            handleHttpError(res, "INVALID_PASSWORD", 401)
            return
        }

        employee.set("password", undefined, {strict:false}) //Si no queremos que se muestre el hash en la respuesta
        const data = {
            token: await tokenSign(employee)
        }
        console.log("Se ha logeado correctamente!")
        res.send(data)
    }catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_LOGIN_EMPLOYEE")
    }
}

module.exports = { getEmployees, insertEmployee, registerEmployee, loginEmployee }