/**
 * Entornos de variables
 * linux key=elvalor node entorno.js
 * Windowas $env:Key="elvalor" => node entorno.js
 */

// let key = `ASF458729355hjdajr`
let key = process.env.Key || 'ASF458729355hjdajr'

console.log(key);