const mongoose = require("mongoose")

const ProductScheme = new mongoose.Schema(
    {
        priceInEuro:{
            type: Number
        },
        priceInDollar:{
            type: Number
        },
        description:{
            type: String
        },
        format:{
            type: String
        },
        harvest:{
            type: Date
        },
        quantity:{
            type: Number
        }
    },
    {
        timestamp: true, 
        versionKey: false
    }
)

module.exports = mongoose.model("product", ProductScheme) 