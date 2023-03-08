/**
 * Procesos hijos
 * Documentación https://nodejs.org/dist/latest-v18.x/docs/api/child_process.html
 */
const {exec, spawn} = require('child_process')

// exec('node modulos/console.js', (error, stdout, sdterr) => {
//     console.log(stdout);
// })

let process = spawn('ls', ['-la']);
process.connected
process.stdout.on('data', (dato) => {
    console.log(dato);
})