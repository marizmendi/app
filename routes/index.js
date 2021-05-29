var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  ip = req.headers["cf-connecting-ip"]
  res.render('index', {
    title: 'arizxyz.com',
    ip: ip
  });
});

module.exports = router;
