var express = require('express');
var mongoose = require('mongoose');

var techieFromModel = require('../../models/onetech');
var techieFromResponse = require('../../utility/response');

//Retrieve all data techie data from the database
async function getTechie(req, res){
    try {
        var techies = await techieFromModel.getTechieData();
        techieFromResponse.retrieveData(res, techies);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error occured while retrieving techies."
        });
    }
}

//Create and save a new techie
async function createTechie(req, res){
    try {
        var techie = await techieFromModel.createTechieData(req);
        techieFromResponse.createData(res, req, techie)
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error occured while creating the Techie."
        });
    } 
}


//Retrive the data of a techie with the specified id in the request
async function getDetail(req, res){
    try {
        var techie = await techieFromModel.getTechieDataById(req.params.id);
        techieFromResponse.retrieveDataById(res, req, techie);
    } catch (error) {
        if(error.kind == "not_found"){
            res.status(404).send({
                message:
                    `Not found Techie with id ${req.params.id}`
            });
        } else {
            res.status(500).send({
                message:
                    "Error retrieving Techie with id " + req.params.id
            });
        }
    }
}

//Update the data of a techie with the specified id in the request
async function updateTechie(req, res){
    try {
        var techie = await techieFromModel.updateTechieById(req);
        techieFromResponse.updateData(res, req, techie);
    } catch (error) {
        res.status(500).send({
            message:
                error.message || "Some error occured while updating the Techie."
        });
    }
}

//Delete a techie with the specified id in the request
async function deleteTechie(req, res){
    try {
        var techie = await techieFromModel.deleteTechieData(req.params.id);
        techieFromResponse.deleteData(res, req);        
    } catch (error) {
        if(error.kind == "not_found"){
            res.status(404).send({
                message:
                    `Not found Techie with Id ${req.params.id}.`
            });
        } else {
            res.status(500).send({
                message:
                    "Could not delete Techie with id " + req.params.id
            });
        }
    }
}

module.exports.getTechie = getTechie;
module.exports.createTechie = createTechie;
module.exports.getDetail = getDetail;
module.exports.updateTechie = updateTechie;
module.exports.deleteTechie = deleteTechie;