const express = require('express');
const router = express.Router();
const { index } = require('../controllers/controllerMovies.js');

router.get('/', index);

module.exports = router;