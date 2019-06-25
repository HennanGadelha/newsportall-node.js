
module.exports = (app)=>{

    app.get('/noticias', (req, res)=>{
        
        let conn = app.config.dbConnection();
        let noticiasModel = new app.app.models.NoticiasDAO(conn);

        noticiasModel.getNoticias((error, result)=>{

            res.render('noticias/noticias', {noticias: result});
        });
       
    })
}



