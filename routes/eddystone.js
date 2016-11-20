var express = require('express');
var router = express.Router();

router.get('/uid', function(req, res, next) {
  res.render('eddystone-uid', {
    title: 'Beacon Simulator'
  });
});

module.exports = router;
