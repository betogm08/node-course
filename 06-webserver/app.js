const http = require('http');

http.createServer(function(req,res){
    console.log(req.url);
    res.write('Hola mundo');
    res.end();
}).listen(8080, function(err,res){
    if(err){
        console.log('No se pudo concectar al puerto');
    }else{
        console.log('Escuchando en el puerto 8080');
    }
});