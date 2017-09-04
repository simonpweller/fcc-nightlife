var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Nightlife',
    user: req.user,
    results: []
  });
});

module.exports = router;
