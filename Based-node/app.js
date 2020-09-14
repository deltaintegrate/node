const argv = require('./config/yargs').argv;

const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite).then(
            console.log(`valor obtenido`)
        ).catch(e => {
            console.log(e)
        })
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => {
                console.log(err);
            })
        break;

    default:
        console.log('comando no reconocido')
        break;

}

//console.log();

// let argv2 = process.argv;

// console.log(argv);