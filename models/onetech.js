const mongoose = require('mongoose');

const techSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    lang:{
        type:String,
        required:true,
    },
})

module.exports = mongoose.model('Techie', techSchema);
