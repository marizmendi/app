const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.title = 'arizxyz.com'
  res.render('index');
});

router.get('/message/:name', function(req, res, next) {
  res.locals.message = "Chupamela " + req.params.id
  res.render('message');
});

router.get('/edu', function(req, res, next) {
  res.locals.message = "Chupamela Edu"
  res.render('message');
});

router.get('/ip', function(req, res, next) {
  res.locals.ip = req.headers["cf-connecting-ip"]
  res.render('ip');
});

module.exports = router;
