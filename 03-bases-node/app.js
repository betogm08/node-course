var {tabla, lista} = require("./multiplicar/multiplica");
var argv = require('yargs').command('listar', 'Comando para listar tablas de multiplicar',{
    base:{
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}).argv;

console.log(argv.base);

let command = argv._[0];

switch(command){
    case 'listar':
        console.log("Lista creada");
        lista(argv.base,argv.limite).then(data => {
            console.log("Tabla del "+argv.base+" hasta el numero "+argv.limite);
            console.log(data);
        }).catch(e => {
            console.log(e);
        });
        break;

    case 'crear':
        console.log('Archivo creado');
        tabla(argv.base).then(archivo => {
            console.log("archivo creado"+archivo);
        }).catch(e => {
            console.log(e);
        });
        break;

    default:
        console.log('Error');
}

