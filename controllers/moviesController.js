const db = require('../database/models');

module.exports = {
    list: function(req, res) {
        db.Pelicula.findAll()
        .then(function(resultado) {
            res.render('listadoPeliculas', {
                peliculas: resultado
            })
        });
    },
    detail: function(req, res, next) {
        db.Pelicula.findByPk(req.params.idMovie, {
            include: [{association: 'genre'}]
        })
        .then(function(resultado) {
            res.render('detallePelicula', {
                pelicula: resultado
            })
        });
    },
    create: function(req, res) {
        res.render('create');
    },
    add: function(req, res) {
        db.Pelicula.create({
            title: req.body.title,
            rating: req.body.rating,
            release_date: req.body.release_date,
            awards: req.body.awards,
            length: req.body.length,
            genre:req.body.genre
        })
        .then(function(resultado) {
            res.redirect('/movies');
        })
        .catch(function(errors){
            res.send(errors)
        })
    },
    edit: function(req, res){
        db.Pelicula.findByPk(req.params.idMovie)
        .then(function(resultado){
            res.render('editar', {pelicula:resultado})
        });
    },
    update: function(req, res) {
        db.Pelicula.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre: req.body.genre            
        },
        {
            where: {
                id: req.params.id
            }
        })
        .then(function(resultado) {
            res.redirect('/movies/detail' + req.params.id);
        });
    },
    delete: function(req, res) {
        db.Pelicula.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(resultado) {
            res.redirect('/movies');
        });
    }
}