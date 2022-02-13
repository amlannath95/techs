var res = require('express/lib/response');
var mongoose = require('mongoose');
var createSchema = require('../schema/techieschema');

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
    
    if(req.body.name){
        techie.name = req.body.name;
    }

    if(req.body.lang){
        techie.lang = req.body.lang;
    }
    console.log('in model')

    if(req.body.contact){
        techie.contact = req.body.contact;
    }

    if(req.body.dob){
        techie.dob = req.body.dob;
    }

    if(req.body.email){
        techie.email = req.body.email;
    }

    if(req.body.pwd){
        techie.pwd = req.body.pwd;
    }

    return await techie.save();
}

//Functiion creates a techie and returns the updated database
async function createTechieData(req){
    var techie = new techieData({
        name: req.body.name,
        lang : req.body.lang,
        contact : req.body.contact,
        email : req.body.email,
        dob : req.body.dob,
        pwd : req.body.pwd
    })
    
    return await techie.save();
        
}

//Function deletes the techie specified by id
async function deleteTechieData(id){
    return await techieData.findByIdAndDelete(id);
}

//Sign up
async function signUpTechie(req, res, newPwd){
    var techie = new techieData({
        name: req.body.name,
        lang : req.body.lang,
        contact : req.body.contact,
        email : req.body.email,
        dob : req.body.dob,
        pwd : newPwd
    })
    
    return await techie.save();
        
}

//Sign In
async function signInTechie(){
    
}

module.exports.getTechieData = getTechieData;
module.exports.getTechieDataById = getTechieDataById;
module.exports.updateTechieById = updateTechieById;
module.exports.createTechieData = createTechieData;
module.exports.deleteTechieData = deleteTechieData;
module.exports.signUpTechie = signUpTechie;

module.exports.techieData = techieData;

