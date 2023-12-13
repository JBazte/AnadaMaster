const mongoose = require("mongoose")

const EmployeeScheme = new mongoose.Schema(

    { 
        socialSecurityNumber:{
            type: Number
        },
        nif:{
            type: String
        },
        name:{
            type: String
        },
        surname:{
            type: String
        },
        birthdate:{
            type: Date
        },
        domicile:{
            type: String
        },
        address:{
            type: String 
        },
        phoneNumber:{
            type: String
        },
        contact:{
            type: String
        },
        employeeStatus:{
            type: String
        },
        entryDate:{
            type: Date
        },
        numOfChildren:{
            type: Number
        },
        maritalStatus:{
            type: String
        },
        horoscope:{
            type: String
        },
        admin:{
            type: Number
        },
        email:{
            type: String
        },
        password:{
            type: String
        },
    },
    {
        timestamp: true, 
        versionKey: false
    }
)

module.exports = mongoose.model("employee", EmployeeScheme) 