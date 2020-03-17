const axios = require('axios');

const getLugar = async function(dir){
    var country = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${country}`,
        headers: {'x-rapidapi-key': '5c09216418msh251eebb226c5ad5p18e90bjsne7af2f146bdf'}
    });

    const resp = await instance.get();

    if(resp.data.Results.length === 0){
        throw new Error('No se encontró dirección para '+country);
    } 
    const direccion = resp.data.Results[0].name;
    const longitud = resp.data.Results[0].lon;
    const latitud = resp.data.Results[0].lat;

    return {
        direccion,
        longitud,
        latitud
    };
}

module.exports = {
    getLugar
}

