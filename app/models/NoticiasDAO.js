function NoticiasDAO(connection) {


this._conn = connection;


}

NoticiasDAO.prototype.getNoticias =  function(callback){
    this._conn.query('select * from noticia ', callback);
}


NoticiasDAO.prototype.getNoticia  = function(callback){

    this._conn.query('select * from noticia where id = 1', callback)
}

NoticiasDAO.prototype.salvarNoticia  = function(noticia,callback){

    this._conn.query('insert into noticia set ?', noticia, callback);

}

module.exports = ()=>{

    return NoticiasDAO;
}