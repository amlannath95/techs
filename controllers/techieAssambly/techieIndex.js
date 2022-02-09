var express = require('express');
var mongoose = require('mongoose');

var techieValidation = require('./techieValidation');
var techieController = require('./techiecontroller');



module.exports.createTechieData = function createTechieData(req, res){
    if(techieValidation.createTechie(req, res)){
        techieController.createTechie(req, res);
    }
}

module.exports.updateTechieData = function updateTechieData(req, res){
    if(techieValidation.updateTechie(req, res)){
        techieController.updateTechie(req, res);
    }
}

module.exports.getTechieData = function getTechieData(req, res){
    techieController.getTechie(req, res);
}

module.exports.getDetail = function getDetail(req, res){
    techieController.getDetail(req, res);
}

module.exports.deleteTechie = function deleteTechie(req, res){
    techieController.deleteTechie(req, res);
}