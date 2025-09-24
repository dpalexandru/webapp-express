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


module.exports = { index };