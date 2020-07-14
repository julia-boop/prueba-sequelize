var express = require('express');
var router = express.Router();
var moviesController = require('../controllers/moviesController');


//INDEX
router.get('/', moviesController.list)
router.get('/detalle/:idMovie', moviesController.detail);

//CREAR PELICULA
router.get('/create', moviesController.create);
router.post('/create', moviesController.add);

//EDITAR PELICULA
router.get('/editar/:idMovie', moviesController.edit);
router.put('/editar/:idMovie', moviesController.update);

//BORRAR PELICULA
router.delete('/delete/:idMovie', moviesController.delete);


module.exports = router;