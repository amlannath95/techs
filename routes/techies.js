var express = require('express');

var router = express.Router();

var tokenAuthentication = require('../authentication/tokenAuthentication');
var techieFromIndex = require('../controllers/techieAssambly/techieIndex');
var techieFromController = require('../controllers/techieAssambly/techiecontroller');

//Retrieve data of all techies
router.get('/data',  techieFromIndex.getTechieData);

//Retrieve data of a techies via token
router.get('/getUserData/:id',tokenAuthentication.checkToken, techieFromIndex.getDetail);

//Create a techie
router.post('/createUser', techieFromIndex.createTechieData);

//Update a techie by id
router.put('/updateUserData/:id', techieFromIndex.updateTechieData);

//Delete a techie by id
router.delete('/deleteUser/:id', techieFromIndex.deleteTechie);

//Signin
router.post('/signin', techieFromController.signInTechie);

//Signup
router.post('/signup', techieFromIndex.signUpTechie);


module.exports = router;