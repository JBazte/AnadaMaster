const mongoose = require("mongoose")

const BarrelScheme = new mongoose.Schema(

    {
        barrelOrigin: {
            type: String
        },
        quantity: {
            type: Number
        }
    },
    {
        timestamp: true,
        versionKey: false
    }
)

module.exports = mongoose.model("barrel", BarrelScheme) 