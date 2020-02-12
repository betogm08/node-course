//FUNCION DE FLECHA

//Funcion sumar modo normal
/*function sumar(a, b){
	return a+b;
}*/

//Funcion sumar modo flecha
/*let sumar = (a, b) => {
	return a+b;
}*/

//Si la funcion solo retorna algo en una sola linea, podemos simplificarla de la siguiente manera:
//let sumar = (a, b) => a+b;

//console.log(sumar(10, 60));

//Funcion saludar normal
/*function saludar(){
	return "Hola mundo";
}*/

//Funcion saludar flecha
//let saludar = () => "Hola mundo";

//console.log( saludars() );

let spiderman = {
	nombre: 'Peter',
	apellido: 'Parker',
	poder: 'Sentido arácnido',
	getSuperHero(){
		return `${this.nombre} ${this.apellido} poder: ${this.poder}`
	}
};

console.log( spiderman.getSuperHero() );

