const mongoose = require("mongoose")

const ProductOrderScheme = new mongoose.Schema(
    {
        idClient:{
            type: String
        },
        basket:{
            type: Map,
            of: Number,
            default: new Map()
        },
        status:{
            type: String
        },
        discount:{
            type: Number
        },
        totalPrice:{
            type: Number
        }
    },
    {
        timestamp: true, 
        versionKey: false
    }
)

module.exports = mongoose.model("productOrder", ProductOrderScheme) 