var express = require('express');
var router = express.Router();
var sendEmailController = require('../controllers/sendemail-controller');


router.get('/', function (req, res, next) {
  console.log('send email router GET');
  // console.log('req.body', req.body);
  
  res.send('send email router GET(works but use POST method to send an email at /sendemail/contact');
});

router.post('/contact', sendEmailController);

module.exports = router;
