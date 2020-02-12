//Objeto spiderman

let spiderman = {
	nombre: 'Peter',
	apellido: 'Parker',
	poder: 'Sentido arácnido',
	getSuperHero: function(){
		return `${this.nombre} ${this.apellido} poder: ${this.poder}`
	}
};

//Destructuracion
let {nombre: primerNombre, apellido, poder} = spiderman;

console.log(primerNombre, apellido, poder);