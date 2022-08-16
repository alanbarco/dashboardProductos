var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/inicio', function(req, res, next) {
  res.send('Estamos en la pagina de users/inicio');
});

module.exports = router;
