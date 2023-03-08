/**
 * Stream para varianles
 * utlizando fs
 */
const fs = require('fs');
const stream = require('stream')
const util = require('util')

// let data = '';
// Asignamos la dirección del paquete
let readableStream = fs.createReadStream(__dirname + '/input.txt')
// readableStream.setEncoding('utf8')
// readableStream.on('data', (chunk) => {
//     data += chunk
// });

// readableStream.on('end', () => {
//     console.log(data);
// });

// process.stdout.write('hola')
// process.stdout.write('quw')
// process.stdout.write('tal')


const Transform = stream.Transform;

const Upper = () => {
    Transform.call(this)
}
util.inherits(Upper, Transform)


Upper.prototype._transform = (chunk, codif, cb) => {
    chunkUpper = chunk.toString().toUpperCase();
    this.push(chunkUpper);
    cb()
}

let upper = new Upper()
readableStream
.pipe(upper)
.pipe(process.stdout)