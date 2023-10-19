const htmlRte = require('express').Router();
const generateUniqueId = require ('generate-unique-id');
const genId = generateUniqueId({
    length: 5
})


// Get /notes --> notes.html
// Get * --> index.html