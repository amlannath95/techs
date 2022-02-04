const express = require('express');
const router = express.Router();
//const Techie = require('../models/onetech');
const Techie = require('../controllers/techiecontroller');

router.get('/', Techie.getTechie);

router.get('/:id', Techie.getDetail);

router.post('/', Techie.createTechie);

router.patch('/:id', Techie.updateTechie);

router.delete('/:id', Techie.deleteTechie);


module.exports = router;