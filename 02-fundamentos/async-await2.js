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

let getEmpleado = async (id) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);
    
    if(!empleadoDB){
        throw new Error(`No existe un empleado con el ID ${id}`);
    }else{
        return empleadoDB;
    }
}

let getSalario = async (empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);
        
    if(!salarioDB){
        throw new Error(`El salario del ${empleado.nombre} no existe`);
    }else{
        return {
            nombre: empleado.nombre,
            salario: salarioDB.salario
        };
    }
}

let getInformacion = async (id) => {
    let empleado = await getEmpleado(id);
    let salario = await getSalario(empleado);

    return `El empleado ${salario.nombre} tiene $${salario.salario}`;
}

getInformacion(4).then(mensaje => {
    console.log(mensaje);
}).catch(err => {
    console.log(err);
})