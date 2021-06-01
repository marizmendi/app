const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.locals.title = 'arizxyz.com'
  res.render('index');
});

router.get('/ip', function(req, res, next) {
  res.send(req.headers["cf-connecting-ip"])
});

module.exports = router;
