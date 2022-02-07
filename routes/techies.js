var express = require('express');

var router = express.Router();

var techieFromController = require('../controllers/techiecontroller');

//Retrieve data of all techies
router.get('/data', techieFromController.getTechie);

//Retrieve data of a techies by id
router.get('/getUserData/:id', techieFromController.getDetail);

//Create a techie
router.post('/createUser', techieFromController.createTechie);

//Update a techie by id
router.put('/updateUserData/:id', techieFromController.updateTechie);

//Delete a techie by id
router.delete('/deleteUser/:id', techieFromController.deleteTechie);

module.exports = router;