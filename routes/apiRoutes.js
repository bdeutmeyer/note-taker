const apiRte = require('express').Router();
const generateUniqueId = require ('generate-unique-id');
const genId = generateUniqueId({
    length: 5
});
const { readFile, writeFile } = require('fs/promises');

apiRte.get('/notes', (req, res) => {
    console.info(`${req.method} request received`);

    readFile('./db/db.json')
    .then((data) => res.json(JSON.parse(data)))
});

apiRte.post('/notes', (req, res) => {
    console.info(`${req.method} request received`);

    const { title, text } = req.body;
    if (title && text) {
        const newNote = {
          title,
          text,
          note_id: genId(),
        };
    
    const noteString = JSON.stringify(newNote);
    
    readFile('./db/db.json', 'utf8')
    .then((data) => {
        const noteArray = JSON.parse(data);
        noteArray.push(newNote);
        
        writeFile(`./db/db.json`, noteString, (err) => {
              if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
              } else {
                console.log(`New note has been written to JSON file`);
                res.status(201).json(newNote);
              }
        });
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Internal Server Error');
    });   
});
// Get /api/notes --> reads the db.json file, returns all saved notes as JSON
// Post /api/notes --> receives a new note to save on the request body, adds it to the db.json file, then returns the new note to the client. needs unique id, could use function from other things, or npm package

//BONUS: Delete /api/notes/:id should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.