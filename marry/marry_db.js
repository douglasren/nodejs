var mongoose = require('mongoose');

var marrySchema = new mongoose.Schema({
    name : String,
    content : String,
});


var marryModel = mongoose.model('marrys', marrySchema);

var marryOperation = function () {

}