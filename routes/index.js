var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.title = 'arizxyz.com'
  res.render('index');
});

router.get('/ip', function(req, res, next) {
  res.locals.ip = req.headers["cf-connecting-ip"]
  res.render('ip');
});

module.exports = router;
