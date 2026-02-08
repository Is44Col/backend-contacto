const express = require('express');
const router = express.Router(); 

const db = require('../conexion'); 

router.post('/contacto', (req, res) => {
    const { nombre, contacto, mensaje } = req.body;
    const sql = 'INSERT INTO contacto (nombre, contacto, mensaje) VALUES (?, ?, ?)';

    db.query(sql, [nombre, contacto, mensaje], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ mensaje: 'Datos agregados correctamente' });
    });
});

module.exports = router;