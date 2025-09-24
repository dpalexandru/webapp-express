const errorHandler = (err, req, res, next) => {
    console.error('Errore:', err);
    res.status(500).json({
        error: err.message || 'Errore interno del server'
    });
};

module.exports = errorHandler;