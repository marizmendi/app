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

router.post('/validating-webhook', (req, res) => {
  if (
    req.body.request === undefined ||
    req.body.request.uid === undefined
  ) {
    res.status(400).send();
    return;
  }
  console.log(JSON.stringify(req.body)); // DEBUGGING
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

router.post('/mutating-webhook', (req, res) => {
  if (
    req.body.request === undefined ||
    req.body.request.uid === undefined
  ) {
    res.status(400).send();
    return;
  }
  const { request: { uid } } = req.body;
  const patch = {
    "op": "replace",
    "path": "/spec/containers/0/image",
    "value": "debian"
  }
  response_json = {
    apiVersion: 'admission.k8s.io/v1',
    kind: 'AdmissionReview',
    response: {
      uid,
      allowed: true,
      patch: patch
    },
  }
  console.log(JSON.stringify(response_json)); // DEBUGGING
  res.send(response_json);
});

module.exports = router;
