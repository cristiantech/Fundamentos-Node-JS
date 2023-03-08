/**
 * Try catch para prevenir que nuestros modulos no se interruoan
 * 
 */
const anotherFn = () => {
    let a = 10
    return a + z
}
try {
    anotherFn()
} catch (error) {
    console.error(error.message);
}

console.log('Hola');
