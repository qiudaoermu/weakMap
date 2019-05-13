var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
  console.log(req.originalUrl)
  next()
},function(req, res, next) {
  console.log(10)
  res.render('index', { title: 'Express' });
});

module.exports = router;
