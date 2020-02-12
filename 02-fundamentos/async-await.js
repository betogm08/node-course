let getNombre = async () => {
    return 'Roberto';
}

let saludo = async () => {
    let nombre = await getNombre();

    return "Hola "+nombre;
}

saludo().then(saludo => {
    console.log(saludo);
}).catch(err => {
    console.log(err);
})