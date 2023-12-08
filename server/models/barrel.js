const mongoose = require("mongoose")

const BarrelScheme = new mongoose.Schema(

    {
        ID_barrel:{
            type: Number
        },
        origin:{
            type: String
        },
        cuantity:{
            type: Number
        }
    },
    {
        timestamp: true, 
        versionKey: false
    }
)

module.exports = mongoose.model("barrel", BarrelScheme) 