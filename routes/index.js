var express = require('express');
var router = express.Router();
var moviesController = require ('../controllers/moviesController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/movies',moviesController.listar); 
router.get('/movies/detail/:id',moviesController.detalle);
router.get ('/movies/new',moviesController.nueva); 
router.get ('/movies/recommended',moviesController.recomendadas);
router.post('/movies/search',moviesController.buscar); 
module.exports = router;
