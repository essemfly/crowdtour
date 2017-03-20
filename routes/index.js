var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/fanmeeting', function(req, res, next) {
    res.render('fanmeeting');
});

router.get('/carribean', function(req, res, next) {
    res.render('carribean');
});

router.get('/dramaset', function(req, res, next) {
    res.render('dramaset');
});

router.get('/hanriver', function(req, res, next) {
    res.render('hanriver');
});

router.get('/restaurant1', function(req, res, next) {
    res.render('restaurant1');
});

router.get('/restaurant2', function(req, res, next) {
    res.render('restaurant2');
});

router.get('/restaurant3', function(req, res, next) {
    res.render('restaurant3');
});

router.get('/hotel', function(req, res, next) {
    res.render('hotel');
});

router.get('/makeup', function(req, res, next) {
    res.render('makeup');
});

router.get('/entertainment', function(req, res, next) {
    res.render('entertainment');
});

router.get('/nailart', function(req, res, next) {
    res.render('nailart');
});

router.get('/skincare', function(req, res, next) {
    res.render('skincare');
});

router.get('/apply', function(req, res, next) {
    res.render('apply');
});


module.exports = router;


