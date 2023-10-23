var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Web Developers of Fall\'23 are shivering CH1150' });
});

router.get('/login', function(req, res, next) {
  res.send('Login successful')
});

router.get('/addUser', function(req, res, next) {
  res.json({'name': 'John Wick'})
});

module.exports = router;
