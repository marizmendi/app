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

router.post('/my-webhook-path', (req, res) => {
  if (
    req.body.request === undefined ||
    req.body.request.uid === undefined
  ) {
    res.status(400).send();
    return;
  }
  console.log(req.body); // DEBUGGING
  const { request: { uid } } = req.body;
  res.send({
    apiVersion: 'admission.k8s.io/v1',
    kind: 'AdmissionReview',
    response: {
      uid,
      allowed: true,
    },
  });
});

module.exports = router;
