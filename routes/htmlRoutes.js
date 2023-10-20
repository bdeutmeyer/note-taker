const htmlRte = require('express').Router();
const path = require('path');

// Get request for notes page, sends notes.html
htmlRte.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
    console.info(`${req.method} request received`);
});

// Wild card get request, sends index.html
htmlRte.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
    console.info(`${req.method} request received`);
});

module.exports = htmlRte;