var express = require('express');
var router = express.Router();
//const Techie = require('../models/onetech');
var techieFromController = require('../controllers/techiecontroller');

router.get('/', techieFromController.getTechie);

router.get('/:id', techieFromController.getDetail);

router.post('/', techieFromController.createTechie);

router.patch('/:id', techieFromController.updateTechie);

router.delete('/:id', techieFromController.deleteTechie);


module.exports = router;