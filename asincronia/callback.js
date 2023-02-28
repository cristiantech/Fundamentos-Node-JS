/**
 * Callback
 */
// console.log("Primer ejemplo");
// const suma = (num1, num2) => {
//     return num1 + num2
// }

// const main = (num1, num2, callcack) => {
//     return callcack(num1, num2)
// }

console.log("Segundo ejemplo");

//Hola
const hola = (nombre, callback) => {
    setTimeout(() => {
        console.log(`Hola como eatas ${nombre}`);
        callback(nombre)
    }, 2000);
}
//blabla
const conversacion = (callback) => {
    setTimeout(() => {
        console.log(`bla bla`);
        callback()
    }, 2000);
}
//Adios
const Adios = (nombre, callback) => {
    setTimeout(() => {
        console.log(`Adios ${nombre}`);
        callback()
    }, 2000);
}

//main
console.log('Iniciando conversación');
const main = () => {
    let nombre = 'cristian'
    hola(nombre, () => {
        conversacion(() => {
            conversacion(() =>{
                Adios(nombre, () => {
                    console.log('Fin de la conversación');
                } )
            })
        })
    })
}
main()



