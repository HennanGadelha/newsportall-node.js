const http = require('http');





console.log('portal de noticias');

http.createServer((req,res)=>{
    res.end('criando portal de noticias');
}).listen(8082)
