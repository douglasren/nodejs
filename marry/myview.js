
var express = require('express');
var router = express.Router();



exports.marryIndex = function (req, res) {
    console.log('in');
    var data = {};
    data['title'] = 'hello,world';
    console.log('index ok!');
    res.render('main', data);
}