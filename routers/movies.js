const express = require('express');
const router = express.Router();
const { index, show, getReviewsByMovie } = require('../controllers/controllerMovies.js');

//rotta per tutti i film
router.get('/', index);

// rotta per un singolo movie tramite id
router.get('/:id', show);

// recensioni di un film
router.get("/:id/reviews", getReviewsByMovie);

module.exports = router;