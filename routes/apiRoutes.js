const apiRte = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

apiRte.get('/notes', (req, res) => {
    console.info(`${req.method} request received`);

    readFromFile('./db/db.json')
    .then((data) => res.json(JSON.parse(data)))
});

apiRte.post('/notes', (req, res) => {
    console.info(`${req.method} request received`);

    const { title, text } = req.body;
    if (title && text) {
        const newNote = {
          title,
          text,
          note_id: uuidv4(),
        };
        console.log(newNote)
    const noteString = JSON.stringify(newNote);
    
    readAndAppend(noteString, './db/db.json')  
}});

module.exports = apiRte;
//BONUS: Delete /api/notes/:id should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.