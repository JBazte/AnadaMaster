const mongoose = require("mongoose")

const BarrelScheme = new mongoose.Schema(

    {
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