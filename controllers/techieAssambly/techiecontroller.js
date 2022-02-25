var express = require('express');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var techieFromModel = require('../../models/onetech');
var techieFromResponse = require('../../utility/response');

//Retrieve all data techie data from the database
async function getTechie(req, res) {
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
async function createTechie(req, res) {
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
async function getDetail(req, res) {
    try {
        var bearerToken = req.params.id;
        decoded = jwt.verify(bearerToken, 'secretkey123');
        var id = decoded.payload;
        var techie = await techieFromModel.getTechieDataById(id);
        techieFromResponse.retrieveDataById(res, req, techie);
    } catch (error) {
        if (error.kind == "not_found") {
            res.status(404).send({
                message:
                    `Not found Techie with id ${req.params.id}`
            });
        } else {
            res.status(500).send({
                message:
                    "Error retrieving Techie with id " + req.params.id + " error:" + error
            });
        }
    }
}

//Update the data of a techie with the specified id in the request
async function updateTechie(req, res) {
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
async function deleteTechie(req, res) {
    try {
        var techie = await techieFromModel.deleteTechieData(req.params.id);
        techieFromResponse.deleteData(res, req);
    } catch (error) {
        if (error.kind == "not_found") {
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

//Sign in
async function signInTechie(req, res) {
    var user = await techieFromModel.techieData.findOne({
        email: req.body.email,
    })

    if (!user) {
        res.status(500).send({
            message:
                'Invalid login email'
        })
    }

    if (user && bcrypt.compareSync(req.body.pwd, user.pwd)) {
        console.log("stringify", JSON.stringify(user._id));
        var uid = JSON.stringify(user._id);
        uid = uid.slice(1, -1);
        console.log('uid', uid);

        var token = jwt.sign({
            payload: uid,
        },
            'secretkey123',
            { expiresIn: "1h" }
        );

        decoded = jwt.verify(token, 'secretkey123');
        var id = decoded.payload;
        console.log("Id:", id)

        return res.send({
            'status': true,
            'message': 'Signed in successfully',
            'data': user,
            'token': token,
            'id': id

        })
    } else {
        res.status(401).send({
            'status': false,
            'message': 'Invalid email or password',

        })
    }
    //     }
    // );
    //console.log('1111')
    // if (isPasswordValid) {
    //     var token = jwt.sign({
    //         id: req.body._id,
    //     },
    //         'secretkey123',
    //         { expiresIn: "1h" }
    //     );

    //     return res.send({
    //         'status': true,
    //         'message': 'Signed in successfully',
    //         'token': token
    //     })
    // } else {
    //     res.status(500).send({
    //         'status': false,
    //         'message': 'Invalid email or password'
    //     })
    // }
}

//Sign up
async function signUpTechie(req, res) {
    try {
        var newPwd = bcrypt.hashSync(req.body.pwd, 10);
        //var newPwd = req.body.pwd;
        var techie = await techieFromModel.signUpTechie(req, res, newPwd);
        var uid = JSON.stringify(techie._id);
        uid = uid.slice(1, -1);
        var token = jwt.sign({
            payload: uid,
        },
            'secretkey123',
            { expiresIn: "1h" }
        );
        await techieFromResponse.signUpTechie(res, req, techie, token, uid);
    } catch (error) {
        res.status(500).send({
            message:
                error || 'Error in signup'
        })
    }
}

// if(studentBody.password == rows.password){
//     rows.password = undefined;
//     const jsontoken = jwt.sign({result: rows}, "paisabazaar", {expiresIn: "1h"});
//     return res.send({
//         "status": true,
//         "message": "Logged in successfully.",
//         "token": jsontoken
//     });
// }
// else{
//     return res.send({
//         "status": false,
//         "message": "Invalid email or password"
//     });
// }


module.exports.getTechie = getTechie;
module.exports.createTechie = createTechie;
module.exports.getDetail = getDetail;
module.exports.updateTechie = updateTechie;
module.exports.deleteTechie = deleteTechie;
module.exports.signInTechie = signInTechie;
module.exports.signUpTechie = signUpTechie;