var express = require('express');

var router = express.Router();

var techieFromIndex = require('../controllers/techieAssambly/techieIndex');

//Retrieve data of all techies
router.get('/data', techieFromIndex.getTechieData);

//Retrieve data of a techies by id
router.get('/getUserData/:id', techieFromIndex.getDetail);

//Create a techie
router.post('/createUser', techieFromIndex.createTechieData);

//Update a techie by id
router.put('/updateUserData/:id', techieFromIndex.updateTechieData);

//Delete a techie by id
router.delete('/deleteUser/:id', techieFromIndex.deleteTechie);

module.exports = router;