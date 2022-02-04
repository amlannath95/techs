const express = require('express');
const mongoose = require('mongoose');

const Techie = require('../models/onetech');

const router = express.Router();

const getTechie = async(req, res)=>{
    try {
        const techies = await Techie.find();
        res.json(techies);
    } catch (error) {
        re.send("Error "+error);
    }
}

const createTechie = async(req, res)=>{
    const techie = new Techie({
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

const getDetail = async(req, res)=>{
    try {
        const techie = await Techie.findById(req.params.id);
        res.json(techie);
    } catch (error) {
        res.send("Error. Id Not present.");
    }
}

const updateTechie = async(req, res)=>{
    try {
        const techie = await Techie.findById(req.params.id);
        techie.name = req.body.name;
        techie.lang = req.body.lang;
        const x = await techie.save();
        res.json(x);
    } catch (error) {
        res.send('Error patching.')
    }
}

const deleteTechie = async(req, res)=>{
    try {
        const techie = await Techie.findByIdAndDelete(req.params.id);
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