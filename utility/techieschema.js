var mongoose = require('mongoose');

function createSchema(){
    return new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        lang:{
            type:String,
            required:true,
        },
    });
}

module.exports.createSchema = createSchema;