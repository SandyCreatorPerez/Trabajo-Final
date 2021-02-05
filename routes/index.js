var express = require('express');
var router = express.Router();
var moviesController = require ('../controllers/moviesController');
var actorsController = require ('../controllers/actorsController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/movies',moviesController.listar); 
router.get('/movies/detail/:id',moviesController.detalle);
router.get ('/movies/new',moviesController.nueva); 
router.get ('/movies/recommended',moviesController.recomendadas);
router.get('/movies/create',moviesController.formulario);
router.post('/movies/create',moviesController.crear);
router.get('/movies/edit/:id',moviesController.verEditar);
router.post('/movies/edit/:id',moviesController.editar);
router.post('/movies/delete/:id',moviesController.eliminar);

router.get('/actors',actorsController.listar); 
router.get('/actors/detail/:id',actorsController.detalle);
router.get ('/actors/recommended',actorsController.recomendadas);
router.get('/actors/create',actorsController.formulario);
router.post('/actors/create',actorsController.crear);
router.get('/actors/edit/:id',actorsController.verEditar);
router.post('/actors/edit/:id',actorsController.editar);
router.post('/actors/delete/:id',actorsController.eliminar);


module.exports = router;
