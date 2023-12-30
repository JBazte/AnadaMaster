const mongoose = require("mongoose")

const BusinessSchema = new mongoose.Schema(
    {
        name:{
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
        },
        CIF:{
            type: String
        },
        shippingAddress:{
            type: String
        },
        volumeDiscount:{
            type: Number
        }
    },
    {
        timestamp: true, 
        versionKey: false
    }
)

module.exports = mongoose.model("business", BusinessSchema) 