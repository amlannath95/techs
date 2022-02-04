var express = require('express');
var mongoose = require('mongoose');

var techieFromModel = require('../models/onetech');

var router = express.Router();

const getTechie = async(req, res)=>{
    try {
        const techies = await techieFromModel.find();
        res.json(techies);
    } catch (error) {
        re.send("Error "+error);
    }
}

var createTechie = async(req, res)=>{
    const techie = new techieFromModel({
        name: req.body.name,
        lang : req.body.lang,
    })

    try{
        const x = await techie.save();
        res.json(x);
    }catch(err){
        res.end("error");
    }
}

var getDetail = async(req, res)=>{
    try {
        const techie = await techieFromModel.findById(req.params.id);
        res.json(techie);
    } catch (error) {
        res.send("Error. Id Not present.");
    }
}

var updateTechie = async(req, res)=>{
    try {
        const techie = await techieFromModel.findById(req.params.id);
        techie.name = req.body.name;
        techie.lang = req.body.lang;
        const x = await techie.save();
        res.json(x);
    } catch (error) {
        res.send('Error patching.')
    }
}

var deleteTechie = async(req, res)=>{
    try {
        const techie = await techieFromModel.findByIdAndDelete(req.params.id);
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