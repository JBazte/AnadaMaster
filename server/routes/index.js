const express = require("express")
const fs = require("fs") //fileSystem
const router = express.Router()

//función auxiliar
const removeExtension = (fileName) => {
    //Solo la primera parte del split (lo de antes del punto)
    return fileName.split('.').shift()
}

function printRoutes(router, basePath = '') {
    router.stack.forEach(layer => {
        if (layer.route) {
            // Ruta estándar
            console.log(`${basePath}${layer.route.path}`);
        } else if (layer.name === 'router') {
            // Enrutador anidado
            printRoutes(layer.handle, `${basePath}${layer.regexp.source}`);
        }
    });
}

//__dirname me coge el directorio actual (en el que está el fichero 'file')
fs.readdirSync(__dirname).filter((file) => {
    const name = removeExtension(file) // index, employee, grape, barrel
    if(name !== 'index') {
        //enlazará el nombre del fichero con la ruta 'routes/name': nos creará la url
        router.use('/' + name, require('./'+name)) // http://localhost:3000/api/employee
    }
})




module.exports = router