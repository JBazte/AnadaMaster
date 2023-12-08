const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET //tu firma, la palabra secreta

//generamos el token
const tokenSign = (employee) =>{

    const sign = jwt.sign(
        {
            id : employee._id,
            admin: employee.admin
        },
        JWT_SECRET,
        {
            expiresIn : "365d" //opcional, indicas cuándo expira el token del user
        }
    )

    return sign
}

//verificamos el token
const verifyToken = (tokenJwt) =>{

    try{
        return jwt.verify(tokenJwt, JWT_SECRET)
    }catch(err){
        console.log(err)
    }
}

module.exports = {tokenSign, verifyToken}