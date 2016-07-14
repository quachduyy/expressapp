var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

<<<<<<< HEAD
router.get('/about', function (req, res) {
    res.send('Hello!!!');
});

=======
>>>>>>> parent of 3aea2f8... fisrt
module.exports = router;
