var mongoose = require('mongoose');

//Schema of the app
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
        contact:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        dob:{
            type:String,
            required:true
        },
        pwd:{
            type:String,
            required:true
        }                   
    });
}

module.exports.createSchema = createSchema;