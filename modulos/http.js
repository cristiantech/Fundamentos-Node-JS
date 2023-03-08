/**
 * Creando nuestro primer servidor con http nativo de node
 */
const http = require('http')

const router = (request,response) => {
        switch (request.url) {
            case '/hola':
                console.log(request.url);
                response.write('Bienvenido s desde hola');
                response.end()
                break;
            case '/':
                console.log(request.url);
                response.write('Bienvenido s desde /');
                response.end()
                break;
        }
}
http.createServer(router).listen(3000)
console.log('Escuanfando en el puerto 3000');