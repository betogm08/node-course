let nombre = 'Spiderman';
let nombreReal = 'Peter Parker';

/*console.log(nombre+' '+nombreReal);
console.log(`Mi superhereo favorito es: ${nombre} quien es ${nombreReal}`);*/

function getNombre(){
	return `${nombre} quien es: ${nombreReal}`;
}

console.log(`Mi super heroe favorito es: ${getNombre()}`);

console.log("Hello");

server.listen('8080', function(){
	console.log("Servidor escuchando en el puerto 8080");
});