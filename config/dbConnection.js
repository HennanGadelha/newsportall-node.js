const mysql = require('mysql');


const conn = ()=>{

    console.log('conexao estabelecida');
    return   mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'newsportal'
    });
}




module.exports = ()=>{
   
    console.log('modulo carregado');
    return conn;
        
}

