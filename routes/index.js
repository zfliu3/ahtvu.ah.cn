var express = require('express'),
    router = express.Router(),
    config = require('../config.js'),
    utils = require('../utils/utils'),
    async = require('async'),
    moment = require('moment');

const util = require('util');

//首页
router.get('/', function (req, res, next) {

    //set render html with widget
    res.context = {};

    res.context._r_widget = true
    res.context._r_widget_skin = 'index.html';

    next();
});

//list
router.get('/category', function (req, res, next) {

    //set render html with widget
    res.context = {};

    res.context._r_widget = true
    res.context._r_widget_skin = 'list.html';

    next();
});

//detail
router.get('/detail', function (req, res, next) {

    //set render html with widget
    res.context = {};

    res.context._r_widget = true
    res.context._r_widget_skin = 'post.html';

    next();
});

//info
router.get('/info', function (req, res, next) {

    //set render html with widget
    res.context = {};

    res.context._r_widget = true
    res.context._r_widget_skin = 'info.html';

    next();
});

//student
router.get('/student', function (req, res, next) {

    //set render html with widget
    res.context = {};

    res.context._r_widget = true
    res.context._r_widget_skin = 'student.html';

    next();
});

//teacher
router.get('/teacher', function (req, res, next) {

    //set render html with widget
    res.context = {};

    res.context._r_widget = true
    res.context._r_widget_skin = 'teacher.html';

    next();
});

//xtgk
router.get('/xtgk', function (req, res, next) {

    //set render html with widget
    res.context = {};

    res.context._r_widget = true
    res.context._r_widget_skin = 'xtgk.html';

    next();
});

//xtwj
router.get('/xtwj', function (req, res, next) {

    //set render html with widget
    res.context = {};

    res.context._r_widget = true
    res.context._r_widget_skin = 'xtwj.html';

    next();
});

//xtdt
router.get('/xtdt', function (req, res, next) {

    //set render html with widget
    res.context = {};

    res.context._r_widget = true
    res.context._r_widget_skin = 'xtdt.html';

    next();
});

//xtwjdetail
router.get('/xtwjdetail', function (req, res, next) {

    //set render html with widget
    res.context = {};

    res.context._r_widget = true
    res.context._r_widget_skin = 'xtwjpost.html';

    next();
});

module.exports = router;