const express = require('express');
const app = express();
const port = 3000;

// body parser per leggere JSON nel body delle richieste
app.use(express.json());

// middleware static per servire file nella cartella public
app.use(express.static('public'));

// rotta principale (index)
app.get("/", (req, res) => {
    res.send("Benvenuto, collegamento riuscito");
});

// avvio server
app.listen(port, () => {
    console.log(`Server in ascolto su http://localhost:${port}`);
});