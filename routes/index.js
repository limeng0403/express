var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var username = '游客';
    console.log('index-req.session:\n', req.session);
    if (req.session.username) {
        username = req.session.username;
    }
    res.render('index.html', {title: 'Express',username:username});
});

module.exports = router;
