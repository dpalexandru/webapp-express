const express = require('express');
const router = express.Router();
const { index, show } = require('../controllers/controllerMovies.js');

//rotta per tutti i film
router.get('/', index);

// rotta per un singolo movie tramite id
router.get('/:id', show);



module.exports = router;