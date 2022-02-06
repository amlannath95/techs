var express = require('express');

var router = express.Router();

var techieFromController = require('../controllers/techiecontroller');

//Retrieve data of all techies
router.get('/', techieFromController.getTechie);

//Retrieve data of a techies by id
router.get('/:id', techieFromController.getDetail);

//Create a techie
router.post('/', techieFromController.createTechie);

//Update a techie by id
router.put('/:id', techieFromController.updateTechie);

//Delete a techie by id
router.delete('/:id', techieFromController.deleteTechie);

module.exports = router;