const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tareas por hacer'
    }

}

const completado = {
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'
    }

}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'actualizar el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borrar el estado completo de la tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}