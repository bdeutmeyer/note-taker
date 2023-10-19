const htmlRte = require('express').Router();
const path = require('path');


htmlRte.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
    console.info(`${req.method} request received`);
});

htmlRte.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
    console.info(`${req.method} request received`);
});

module.exports = htmlRte;