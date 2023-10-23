var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('<h1>This is not a H1B lottery</h1>')
})

router.get('/dashboard', (req, res) => {
    res.render('customers', {name: 'John Wick', age: 46})
})

module.exports = router