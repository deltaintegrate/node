const { crearArchivo } = require('./multiplicar/multiplicar');

let base = 'abc';

console.log(process);
crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(err => {
        console.log(err);
    })