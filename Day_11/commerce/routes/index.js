var express = require('express');
var router = express.Router();
var registerchecks=require('../middlewares/registerchecks')
var register=require('../controllers/register')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register',registerchecks,register)
module.exports = router;
