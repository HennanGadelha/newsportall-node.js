module.exports.addNoticia = function(app, req, res){

    res.render('admin/form_add_noticia');

}

module.exports.salvarNoticia = function(app, req,res){

    let noticia = req.body
        
    let conn = app.config.dbConnection();
    let noticiasModel = new app.app.models.NoticiasDAO(conn);

    noticiasModel.salvarNoticia(noticia,(error, result)=>{

        res.redirect('/noticias');
        
    });

}