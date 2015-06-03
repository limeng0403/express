var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    console.log('login-req.body:\n', req.body);
    console.log('login-req.session:\n', req.session);
    req.session.username = req.body.username;
    res.render('login.html',{
        title:'login',
        username:req.session.username
    });
});

module.exports = router;
