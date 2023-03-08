/**
 * Espacios en memoria
 */
// let buffer = Buffer.alloc(2);
//let buffer = Buffer.from([1,2,3]);
// let buffer = Buffer.from('esto es un buffer');
// console.log(buffer.toString('utf-8'));

let abc = Buffer.alloc(26);
for (let i = 0; i < 26; i++) {
    abc[i] = i + 97
}
console.log(abc.toString());

