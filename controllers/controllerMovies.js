const connection = require('../data/db.js');

// recupero tutti i film
const index = (req, res) => {
    const sql = "SELECT * FROM movies";
    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Errore nell'esecuzione della query film" });
        }
        res.json(results);
    });
};

// recupero un singolo film con le sue recensioni
const show = (req, res) => {
    const { id } = req.params;

    // query per il film
    const sqlMovie = "SELECT * FROM movies WHERE id = ?";

    connection.query(sqlMovie, [id], (err, movieResults) => {
        if (err) {
            return res.status(500).json({ error: "Errore nell'esecuzione della query film" });
        }

        if (movieResults.length === 0) {
            return res.status(404).json({ error: "Movie not found" });
        }

        const movie = movieResults[0];

        // query per le recensioni legate al film
        const sqlReviews = `
            SELECT id, name, vote, text, created_at
            FROM reviews
            WHERE movie_id = ?
            ORDER BY created_at DESC
        `;

        connection.query(sqlReviews, [id], (err, reviewResults) => {
            if (err) {
                return res.status(500).json({ error: "Errore nell'esecuzione della query recensioni" });
            }

            // aggiungo le recensioni dentro l'oggetto film
            movie.reviews = reviewResults;

            res.json(movie);
        });
    });
};

// creo una nuova recensione per un film
const createReview = (req, res) => {
    const { id: movieId } = req.params;
    const { name, vote, text } = req.body;

    const sqlInsert = `
      INSERT INTO reviews (movie_id, name, vote, text, created_at, updated_at)
      VALUES (?, ?, ?, ?, NOW(), NOW())
    `;

    connection.query(sqlInsert, [movieId, name, vote, text], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Errore nell'inserimento della recensione" });
        }

        // costruisco l’oggetto che ritorno
        const newReview = {
            id: result.insertId,
            name,
            vote,
            text,
            created_at: new Date()
        };

        res.status(201).json(newReview);
    });
};

module.exports = { index, show, createReview };