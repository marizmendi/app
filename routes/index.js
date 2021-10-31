const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.locals.title = 'arizxyz.com'
  res.render('index');
});

router.get('/ip', function (req, res, next) {
  res.send(req.ip)
});

router.get('/maria', function (req, res, next) {
  res.locals.title = 'Maria'
  res.render('maria');
});

module.exports = router;
