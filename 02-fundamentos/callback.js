
let getUserById = (_id, callback) => {

	let user = {
		usuario: 'Alberto',
		id: _id
	};

	if(_id === 20){
		callback(`El usuario con el id ${_id} no ha sido encontrado en la base de datos`);
	}else{
		callback(null, user);
	}

	
};

getUserById(20, (err, user) => {
	
	if(err){
		return console.log(err);
	}

	console.log('Usuario de base de datos', user);
	
});

