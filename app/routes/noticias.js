
module.exports = (app)=>{

    app.get('/noticias', (req, res)=>{
        
        app.app.controllers.noticias.mostrarNoticias(app, req, res);
       
    })

    app.get('/noticia', (req, res)=>{

        app.app.controllers.noticias.mostrarNoticia(app, req, res);
    })

}



