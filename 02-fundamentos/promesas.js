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
let getEmpleado = (id) => {

    return new Promise(function(resolve, reject){
        let empleadoDB = empleados.find(empleado => {
            return empleado.id === id;
        });
    
        if(!empleadoDB){
            reject(`No existe un empleado con el ID ${id}`);
        }else{
            resolve(empleadoDB);
        }
    });	
}

let getSalario = (empleado) => {
    return new Promise(function(resolve,reject){
        let salarioDB = salarios.find(salario => {
            return salario.id === empleado.id;
        });
        
        if(!salarioDB){
            reject(`El salario del ${empleado.nombre} no existe`);
        }else{
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario
            });
        }
    });
}

getEmpleado(4).then(empleado => {
    //console.log('Empleado de DB',empleado);
    return getSalario(empleado);
}).then(resp => {
    console.log(`El salario de ${resp.nombre} es ${resp.salario}`);
}).catch(err => {
    console.log(err);
});
