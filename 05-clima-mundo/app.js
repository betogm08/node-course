const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion del pais o estado para busqueda de clima',
        demand: true
    }
}).argv;

const getInfo = async function(direccion){

    try{
        const coordenadas = await lugar.getLugar(direccion);
        const temperatura = await clima.getClima(coordenadas.latitud, coordenadas.longitud);

        return `La temperatura en ${coordenadas.direccion} es de: ${temperatura.temp}, con descripcion: ${temperatura.description}`;
    }catch(err){
        console.log('Error al obtener la informacion');
    }
}

getInfo(argv.direccion)
    .then(function(mensaje){
        console.log(mensaje);
    })
    .catch(console.log)



