const express = require('express');
const router = express.Router();
const { index, show, createReview } = require('../controllers/controllerMovies.js');

//rotta per tutti i film
router.get('/', index);

// rotta per un singolo movie tramite id
router.get('/:id', show);

// rotta per inserire una recensione
router.post("/:id/reviews", createReview);


module.exports = router;