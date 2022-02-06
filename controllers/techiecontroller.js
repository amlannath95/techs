var express = require('express');
var mongoose = require('mongoose');

var techieFromModel = require('../models/onetech');

//Retrieve all data techie data from the database
var getTechie = async(req, res)=>{
    try {
        var techies = await techieFromModel.getTechieData();
        res.json(techies);
    } catch (error) {
        res.send("Error "+error);
    }
}

//Create and save a new techie
var createTechie = async(req, res)=>{
    try{
        var techie = await techieFromModel.createTechieData(req);
        res.json(techie);
    }catch(err){
        res.end("error " + err);
    }
}

//Retrive the data of a techie with the specified id in the request
var getDetail = async(req, res)=>{
    try {
        var techie = await techieFromModel.getTechieDataById(req.params.id);
        res.json(techie);
    } catch (error) {
        res.send("Error. Id Not present.");
    }
}

//Update the data of a techie with the specified id in the request
var updateTechie = async(req, res)=>{
    try {
        var techie = await techieFromModel.updateTechieById(req);
        res.json(techie);
    } catch (error) {
        res.send('Error Upating' + error)
    }
}

//Delete a techie with the specified id in the request
var deleteTechie = async(req, res)=>{
    try {
        var techie = await techieFromModel.deleteTechieData(req.params.id);
        res.json(techie);        
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