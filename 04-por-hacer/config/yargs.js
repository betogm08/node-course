const crear = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Crea una nueva tarea'
    }
}

const actualizar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea'
    },
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completada una tarea'
    }
}


const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', crear)
    .command('actualizar', 'Actualiza el estado completo de una tarea', actualizar)
    .help()
    .argv;


module.exports = {
    argv
}