const res = require('express/lib/response');
var mongoose = require('mongoose');

var techSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    lang:{
        type:String,
        required:true,
    },
})


var techieData = mongoose.model('Techie', techSchema);

var getTechieData = techieData.find();
//var getTechieDataById = 

module.exports.getTechieData = getTechieData;

