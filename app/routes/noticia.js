module.exports = (app)=>{

    app.get('/noticia', (req, res)=>{

        let conn = app.config.dbConnection();
        let noticiasModel = new app.app.models.NoticiasDAO(conn);

        noticiasModel.getNoticia((error, result)=>{
            res.render('noticias/noticia', {noticia: result});
        })
    })
}