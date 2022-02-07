var res = require('express/lib/response');
var mongoose = require('mongoose');
var createSchema = require('../utility/techieschema');

//Schema of the database
var techSchema = createSchema.createSchema();

var techieData = mongoose.model('Techie', techSchema);

//Function returns the data of all techies
async function getTechieData(){
    return await techieData.find();
} 

//Function returns the data of the techie specified by id
async function getTechieDataById(id){
    return await techieData.findById(id);
}

//Function updates and returns the data of the techie specified by id
async function updateTechieById(req){
    var techie = await techieData.findById(req.params.id);
    techie.name = req.body.name;
    techie.lang = req.body.lang;
    return await techie.save();
}

//Functiion creates a techie and returns the updated database
async function createTechieData(req){
    var techie = new techieData({
        name: req.body.name,
        lang : req.body.lang,
    })
    
    return await techie.save();
        
}

//Function deletes the techie specified by id
async function deleteTechieData(id){
    return await techieData.findByIdAndDelete(id);
}

module.exports.getTechieData = getTechieData;
module.exports.getTechieDataById = getTechieDataById;
module.exports.updateTechieById = updateTechieById;
module.exports.createTechieData = createTechieData;
module.exports.deleteTechieData = deleteTechieData;

