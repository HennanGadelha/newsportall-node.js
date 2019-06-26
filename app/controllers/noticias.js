module.exports.mostrarNoticias = function(app, req, res) {

         let conn = app.config.dbConnection();
            let noticiasModel = new app.app.models.NoticiasDAO(conn);

        noticiasModel.getNoticias((error, result)=>{

            res.render('noticias/noticias', {noticias: result});
        });

}


module.exports.mostrarNoticia = function(app,req, res){

    let conn = app.config.dbConnection();
       
    let noticiasModel = new app.app.models.NoticiasDAO(conn);

    noticiasModel.getNoticia((error, result)=>{

        res.render('noticias/noticia', {noticia: result});
    })
    
}