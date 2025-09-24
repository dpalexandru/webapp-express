const express = require('express');
const router = express.Router();
const { index } = require('../controllers/controllerPosts.js');

// Definisco solo la route principale Index
router.get('/', index);

// Esporto le route
module.exports = router;