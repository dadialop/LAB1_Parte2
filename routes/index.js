var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Problema 1', title2:'SAT', title3:'Daniel & Alexis', title4:'Baute Díaz' });
});

module.exports = router;
