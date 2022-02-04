var express = require('express');
var mongoose = require('mongoose');

var techieFromModel = require('../models/onetech');

//var router = express.Router();

var getTechie = async(req, res)=>{
    try {
        var techies = await techieFromModel.getTechieData();
        res.json(techies);
    } catch (error) {
        res.send("Error "+error);
    }
}

var createTechie = async(req, res)=>{
    try{
        var techie = await techieFromModel.createTechieData(req);
        res.json(techie);
    }catch(err){
        res.end("error " + err);
    }
}

var getDetail = async(req, res)=>{
    try {
        var techie = await techieFromModel.getTechieDataById(req.params.id);
        res.json(techie);
    } catch (error) {
        res.send("Error. Id Not present.");
    }
}

var updateTechie = async(req, res)=>{
    try {
        var techie = await techieFromModel.updateTechieById(req);
        res.json(techie);
    } catch (error) {
        res.send('Error patching.' + error)
    }
}

var deleteTechie = async(req, res)=>{
    try {
        // const techie = await techieFromModel.findByIdAndDelete(req.params.id);
        var techie = await techieFromModel.deleteTechieData(req.params.id);
        res.json(techie);
        res.send('Success');
        
    } catch (error) {
        res.send(error);
        console.log('Error' + error);
    }
}

module.exports.getTechie = getTechie;
module.exports.createTechie = createTechie;
module.exports.getDetail = getDetail;
module.exports.updateTechie = updateTechie;
module.exports.deleteTechie = deleteTechie;