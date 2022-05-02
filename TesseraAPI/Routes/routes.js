const express = require ('express');
const router = express.Router();
module.exports = router;

const service = require('../Application/Services/register.js') 

router.post('/register',service.create);

router.get('/registers/details',service.details);


