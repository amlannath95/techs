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


async function getTechieData(){
    return await techieData.find();
} 

async function getTechieDataById(id){
    return await techieData.findById(id);
}

async function updateTechieById(req){
    var techie = await techieData.findById(req.params.id);
    techie.name = req.body.name;
    techie.lang = req.body.lang;
    return await techie.save();
}

async function createTechieData(req){
    var techie = new techieData({
        name: req.body.name,
        lang : req.body.lang,
    })
    
    return await techie.save();
        
}

async function deleteTechieData(id){
    return await techieData.findByIdAndDelete(id);
}

module.exports.getTechieData = getTechieData;
module.exports.getTechieDataById = getTechieDataById;
module.exports.updateTechieById = updateTechieById;
module.exports.createTechieData = createTechieData;
module.exports.deleteTechieData = deleteTechieData;

