const express = require('express');
const app = express();
const port = 3000;

const movieRoutes = require('./routers/movies.js');
const notFound = require('./middlewares/notFound.js');
const errorHandler = require('./middlewares/errorHandler.js');

app.use(express.json());
app.use(express.static('public'));

//rotta principale index 
app.get("/", (req, res) => {
    res.send("Benvenuto, collegamento riuscito");
});

app.use('/movies', movieRoutes);

// Middleware 404 - rotte inesistenti
app.use(notFound);

// Middleware gestione errori
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});