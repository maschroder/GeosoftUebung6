

var express = require('express');
var router = express.Router();
var test = 25


/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('seite1', { title: 'Seite 1' });
});

module.exports = router;