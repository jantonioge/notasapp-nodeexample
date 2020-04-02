const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
};

const completado = {
    demand: true,
    alias: 'c',
    desc: 'marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}