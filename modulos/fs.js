/**
 * Funciones para leer archivos
 */

const fs = require('fs')


const readText = (ruta, callback) => {
    fs.readFile(ruta, (error, data) => {
        callback(data.toString());
    })  
}

const writeText = (ruta, contex, callback) => {
    fs.writeFile(ruta, contex,  (error, data) => {
        if(error) return console.error(' ohhh ha ocurrido un error'); 
        callback('todo ok');
    })  
}

const removeText = (ruta, callback) => {
    fs.unlink(ruta,  (error, data) => {
        if(error) return console.error(' ohhh ha ocurrido un error'); 
        callback('borrado ok');
    })  
}


writeText(`${__dirname}/logs.txt`,'soy un archivo nuevo 2.0',  console.log)
readText(`${__dirname}/logs.txt`, console.log)
removeText(`${__dirname}/logs.txt`, console.log)
