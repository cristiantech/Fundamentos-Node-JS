/**
 * Promesaas
 */
const cows = 10;

const countCows = () => {
    return new Promise((resolve, reject) => {
        if (cows !== 15) return reject('No valido');
        resolve('Perfecto');
    })
}

countCows()
.then(res => console.log(res))
.catch((err) => console.error(err))
.finally(() => console.log('Finalización del proceso'))

// IMplemente el ejerecio del hola com promesas