var fs = require("fs");

var lista = function(base,limite){
    return new Promise((resolve,reject)=>{
        var data = '';
        for(var i = 1; i <= limite; i++){
            data += `${base}X${i}=${base*i}\n`;
        }
        if(!base && !limite){
            reject("Inserte una base y un limite correctamente");
        }else{
            resolve(data);
        }
    });
}

var tabla = function(base){
    return new Promise((resolve, reject) => {
        
        var data = '';
        for(var i = 1; i <= 10; i++){
            data += `${base}X${i}=${base*i}\n`;
         }
         
         fs.writeFile(`tablas/tabla-del-${base}.txt`, data, (err)=>{
             if(err){
                 reject(err);
             }else{
                 resolve(`tabla-del-${base}.txt`);
             }
         });
    })
}

module.exports = {tabla, lista};

