/**
 * Globals
 * no crees varaibles globales
 * global == this
 */

let i = 0;
let intervalo = setInterval(() => {
    console.log('hola');
    if(i === 3) return clearInterval(intervalo)
    i ++
}, 0);

console.log(__dirname);