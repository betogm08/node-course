const axios = require('axios');

const getClima = async function(latitud, longitud){
    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=c3a7817968d4eac5e516b10be9a1c447&units=metric`);

        const description = response.data.weather[0].main;
        const temp = response.data.main.temp;

        return {
            description,
            temp
        }
    }catch(error){
        console.log(error);
    }
    
}

module.exports = {
    getClima
}