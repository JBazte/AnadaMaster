const mongoose = require("mongoose")

const IndividualClientSchema = new mongoose.Schema(
    {
        name:{
            type: String
        },
        surname:{
            type: String
        },
        address:{
            type: String
        },
        phoneNumber:{
            type: String
        },
        NIF:{
            type: String
        }
    },
    {
        timestamp: true, 
        versionKey: false
    }
)

module.exports = mongoose.model("individualClient", IndividualClientSchema) 