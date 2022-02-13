var express = require('express');
var mongoose = require('mongoose');

var techieValidation = require('./techieValidation');
var techieController = require('./techiecontroller');

//Sends the input data for validation and creation of techie
module.exports.createTechieData = function createTechieData(req, res){
    if(techieValidation.createTechie(req, res)){
        techieController.createTechie(req, res);
    }
}

//Sends the input data for validation and updation of techie
module.exports.updateTechieData = function updateTechieData(req, res){
    if(techieValidation.updateTechie(req, res)){
        techieController.updateTechie(req, res);
    }
}

//Retrives the data of all techies
module.exports.getTechieData = function getTechieData(req, res){
    techieController.getTechie(req, res);
}

//Retrieves the data of techie specified in the id
module.exports.getDetail = function getDetail(req, res){
    techieController.getDetail(req, res);
}

//Deletes techie specified by id
module.exports.deleteTechie = function deleteTechie(req, res){
    techieController.deleteTechie(req, res);
}

//Sign-in
module.exports.signInTechie = function signInTechie(req, res){
    techieController.signinTechie(req, res);
}

//Sign up
module.exports.signUpTechie = function signUpTechie(req, res){
    if(techieValidation.signUpTechie(req, res)){
        techieController.signUpTechie(req, res);
    }
}
