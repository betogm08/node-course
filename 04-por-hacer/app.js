const argv = require('./config/yargs').argv;

console.log(argv);

let comando = argv._[0];

switch(comando){
    case 'crear':
        console.log("Crear algo");
    break;

    case 'listar':
        console.log('Lista algo');
    break;

    case 'actualizar':
        console.log('Actualizado!');
    break;

    default:
        console.log('Comando no encontrado');
}