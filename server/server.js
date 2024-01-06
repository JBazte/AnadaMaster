require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const mongoose = require("mongoose")

const port = process.env.PORT
const app = express();
//app.use(cors());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.use("/api", require("./routes")) //Lee routes/index.js por defecto; accedemos a todas las funcionalidades de cada tabla

const client = new MongoClient(process.env.DB_URI);
  
app.listen(port, ()=>{
    console.log("Servidor escuchando en el puerto "+ port);
    
    const db_uri = process.env.DB_URI
    mongoose.set('strictQuery', false)
    mongoose.connect(db_uri).then(()=>{
        console.log("Conectando a la BD...")
    }).catch((err)=>{
        console.log("Se ha detectado un error: "+ err)
    })


});

module.exports = app