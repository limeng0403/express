var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    console.log(req.files);
    res.render('upload.html', {
        title: 'uploaded',
        info: req.files.img
    });
});

module.exports = router;
