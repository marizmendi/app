var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  title = 'arizxyz.com'
  res.render('index', {
    title: title
  });
});

router.get('/ip', function(req, res, next) {
  ip = req.headers["cf-connecting-ip"]
  res.render('ip', {
    ip: ip
  });
});

module.exports = router;
