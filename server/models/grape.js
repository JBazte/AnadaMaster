const mongoose = require("mongoose")

const GrapeScheme = new mongoose.Schema(

    {
        ID_grape:{
            type: Number
        },
        origin:{
            type: String
        },
        date:{
            type: Date
        },
        weight:{
            type: Number
        },
        type:{
            type: String
        },
        ripeness:{
            type: String
        },
        quality:{
            type: Number
        }
    },
    {
        timestamp: true, 
        versionKey: false
    }
)

module.exports = mongoose.model("grape", GrapeScheme) 