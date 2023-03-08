/**
 * OS para sistemas operativos
 */

const os = require('os');
// // La plataforma de nuestro sistemas
// console.log(os.platform());
// // La arquitectura de mi Pc
// console.log(os.arch());
// // Los procesos del cpu
// console.log(os.cpus().length);
// Las señales del sitema
// console.log(os.constants);
// La 
// console.log(os.freemem());
let SIZE = 1024;
const kb = (b) => b / SIZE
const mb = (b) => kb(b) / SIZE
const gb = (b) => mb(b) / SIZE
console.log(os.freemem());
console.log(kb(os.freemem()))  
console.log(mb(os.freemem()))  
console.log(gb(os.freemem()))  

console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.hostname());
console.log(os.networkInterfaces());


