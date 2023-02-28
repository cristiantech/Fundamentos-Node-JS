/**
 * Async Await
 */

const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('hey'), 2000)
        : reject(new Error('No valid'));
    })
}
const anotherFunction = async () =>{
    const response = await fnAsync()
    console.log(response);
}

anotherFunction()

// implementar el ejercicio anterior con async Await