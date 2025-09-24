const express = require('express');
const app = express();
const port = 3000;

const movieRoutes = require('./routers/movies.js');

app.use(express.json());
app.use(express.static('public'));

//rotta principale index 
app.get("/", (req, res) => {
    res.send("Benvenuto, collegamento riuscito");
});

app.use('/movies', movieRoutes);

app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});