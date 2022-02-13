var express = require('express');
var mongoose = require('mongoose');

var contactRegex = /^\d{10}$/;

var emailRegex = /^([a-z\d\.-]+)@([a-z]+)\.([a-z]{2,5})(\.[a-z]{2,8})?$/;

var dobREGEX = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-\d{4}$/;

var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*~?<>])[a-zA-Z0-9!@#$%^&*~?<>]{8,20}$/;

//Validates the data used for creation of a techie
function createTechie(req, res) {
    var techieBody = req.body;
    if (techieBody && Object.keys(techieBody).length === 0 && Object.getPrototypeOf(techieBody) === Object.prototype) {
        res.send({
            message: "Fields cannot be empty."
        })
        return false;
    }

    else {
        if (!(techieBody && techieBody.name)) {
            res.status(400).send({ message: "Name can't be empty" });
            return false;
        }
        else if (!(techieBody && techieBody.lang)) {
            res.status(400).send({ message: "Lang can't be empty" });
            return false;
        }
        else {

            if (!(contactRegex.test(techieBody.contact))) {
                res.status(400).send({ message: "Contact number not in correct format" });
                return false;
            }
            if (!emailRegex.test(techieBody.email)) {
                res.status(400).send({ message: "Invalid email id." });
                return false;
            }
            if (!dobREGEX.test(techieBody.dob)) {
                res.status(400).send({ message: "Invalid date of birth." });
                return false;
            }
            if (!(passwordRegex.test(techieBody.pwd))) {
                res.status(400).send({ message: "Weak password." });
                return false;
            }
            return true;
        }
    }

}

//Validates the sign up data
function signUpTechie(req, res) {
    var techieBody = req.body;
    if (techieBody && Object.keys(techieBody).length === 0 && Object.getPrototypeOf(techieBody) === Object.prototype) {
        res.send({
            message: "Fields cannot be empty."
        })
        return false;
    }

    else {
        if (!(techieBody && techieBody.name)) {
            res.status(400).send({ message: "Name can't be empty" });
            return false;
        }
        else if (!(techieBody && techieBody.lang)) {
            res.status(400).send({ message: "Lang can't be empty" });
            return false;
        }
        else {

            if (!(contactRegex.test(techieBody.contact))) {
                res.status(400).send({ message: "Contact number not in correct format" });
                return false;
            }
            if (!emailRegex.test(techieBody.email)) {
                res.status(400).send({ message: "Invalid email id." });
                return false;
            }
            if (!dobREGEX.test(techieBody.dob)) {
                res.status(400).send({ message: "Invalid date of birth." });
                return false;
            }
            if (!(passwordRegex.test(techieBody.pwd))) {
                res.status(400).send({ message: "Weak password." });
                return false;
            }
            return true;
        }
    }

}

//Validates the data used for updation of techie
function updateTechie(req, res) {
    techieBody = req.body;

    if (techieBody.contact && !(contactRegex.test(techieBody.contact))) {
        res.status(400).send({ message: "Contact number not in correct format" });
        return false;
    }

    if (techieBody.email && !emailRegex.test(techieBody.email)) {
        res.status(400).send({ message: "Invalid email id." });
        return false;
    }

    if (techieBody.dob && !dobREGEX.test(techieBody.dob)) {
        res.status(400).send({ message: "Invalid date of birth." });
        return false;
    }

    if (techieBody.pwd &&  !(passwordRegex.test(techieBody.pwd))) {
        res.status(400).send({ message: "Weak password." });
        return false;
    }

    return true;

}



module.exports.createTechie = createTechie;
module.exports.updateTechie = updateTechie;
module.exports.signUpTechie = signUpTechie;