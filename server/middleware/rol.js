const { handleHttpError } = require("../utils/handleHttpError")

const checkRol = (roles) => (req, res, next) => { // Doble argumento
    try{
        const {employee} = req
        const employeeRol = employee.admin
        const checkValueRol = roles.includes(employeeRol)//Comprobamos que el rol del employee (0 o 1) esté en roles
        if (!checkValueRol) {
            handleHttpError(res, "NOT_ALLOWED", 403)
            return
        }
        next()

    }catch(err){
        handleHttpError(res, "ERROR_PERMISSIONS", 403)
    }
}

module.exports = checkRol