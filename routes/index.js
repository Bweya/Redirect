const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {

  res.render('index', {title: 'Aladdin to be clicked:'});

});


module.exports = router;
