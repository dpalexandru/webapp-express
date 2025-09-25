const connection = require('../data/db.js');

//definisco funzione Index
const index = (req, res) => {
    const sql = "SELECT * FROM movies";
    //eseguo 
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: "Errorre nell'esecuzione della querry" })
        res.json(results)
    })
};


// Mostra un singolo film in base all'ID
const show = (req, res) => {
    const { id } = req.params;

    const sql = "SELECT * FROM movies WHERE id = ?";

    // uso query parametrizzata
    connection.query(sql, [id], (err, results) => {
        if (err) {
            return res
                .status(500)
                .json({ error: "Errore nell'esecuzione della query" });
        }

        // se non trovo nessun record, rispondo con 404
        if (results.length === 0) {
            return res.status(404).json({ error: "Movie not found" });
        }

        res.json(results[0]);
    });
};

// Recupera tutte le recensioni per un dato film
const getReviewsByMovie = (req, res) => {
    const { id } = req.params;

    const sql = `
        SELECT id, name, vote, text, created_at
        FROM reviews
        WHERE movie_id = ?
        ORDER BY created_at DESC
    `;

    connection.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Errore nell'esecuzione della query" });
        }

        res.json(results);
    });
};

module.exports = { index, show, getReviewsByMovie };