/**+
 * Process 
 */

//const process = require('process')
process.on('beforeExit', () => {
    console.log('Cris, el proceso se va a terminar');
})

process.on('exit', () => {
    console.log('el proceso se termino');
    setTimeout(() => {
        console.log('Esto no se va a ejecutar');
    }, 0);
})

setTimeout(() => {
    console.log('Esto si se va a ejecutar');
}, 0);

process.on('uncaughtException', (error, origin) => {
    console.log('Vaya se les olvido capturar el orror');
    setTimeout(() => {
        console.log('Esto es en la exepcoionr');
    }, 0);
    
})

anotherFuntionWhatNotExists();