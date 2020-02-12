let empleados = [{
	id: 1,
	nombre: 'Alberto'
},
{
	id: 2,
	nombre: 'Melissa'
},
{
	id: 3,
	nombre: 'Juan'
}];

let salarios = [{
	id: 1,
	salario: 1000
},
{
	id: 2,
	salario: 4000
}];

//Funcion para obtener el empleado por id
let getEmpleado = (id, callback) => {
	let empleadoDB = empleados.find(empleado => {
		return empleado.id === id;
	});

	if(!empleadoDB){
		callback(`No existe un empleado con el ID ${id}`);
	}else{
		callback(null, empleadoDB);
	}
}

let getSalario = (empleado, callback) => {
	let salarioDB = salarios.find(salario => {
		return salario.id === empleado.id;
	});
	

	if(!salarioDB){
		callback(`El salario del ${empleado.nombre} no existe`);
	}else{
		callback(null, {
			nombre: empleado.nombre,
			salario: salarioDB.salario
		});
	}
}

getEmpleado(2, (err, empleado) => {
	if(err){
		return console.log(err);
	}else{
		getSalario(empleado, (err, res) => {
			if(err){
				return console.log(err);
			}else{
				console.log(`El salario de ${res.nombre} es de ${res.salario}`);
			}
		});
	}	
});