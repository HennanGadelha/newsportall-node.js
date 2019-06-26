const { check, validationResult } = require('express-validator');
module.exports = (app) => {

    app.get('/addnoticia', (req, res)=>{
        
        app.app.controllers.admin.addNoticia(app, req, res);
    })

    app.post('/noticias/salvar',[
        
            check('titulo','titulo tem que entre 5 a 100 caracteres').isLength({min:4, max: 100}),
            check('titulo', 'titulo n pode ser vazio').not().isEmpty(),
            check('resumo','resumo tem que entre 5 a 100 caracteres').isLength({min:4, max: 100}),
            check('resumo', 'resumo n pode ser vazio').not().isEmpty(),
            check('autor','autor tem que entre 5 a 100 caracteres').isLength({min:4, max: 100}),
            check('autor', 'autor n pode ser vazio').not().isEmpty(),
            check('conteudo','conteudo tem que entre 5 a 100 caracteres').isLength({min:4, max: 100}),
            check('conteudo', 'conteudo n pode ser vazio').not().isEmpty(),
            check('data', 'data n pode ser vazio').not().isEmpty(),

        ], (req, res)=>{
        

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                
                return res.status(422).json({ errors: errors.array() });
            }

            app.app.controllers.admin.salvarNoticia(app, req, res);
        
    })
}

