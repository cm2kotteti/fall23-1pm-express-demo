var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/logout', function(req, res, next) {
  res.render('index', {title: 'Logout successful'})
});

router.get('/delete', function(req, res, next) {
  res.send('<em>User deleted</em>');
});

module.exports = router;
