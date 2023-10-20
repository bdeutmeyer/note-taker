const apiRte = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils');

// Get request for the notes API
apiRte.get('/notes', (req, res) => {
    console.info(`${req.method} request received`);

    readFromFile('./db/db.json')
    .then((data) => res.json(JSON.parse(data)));
});

// Post request for the notes API
apiRte.post('/notes', (req, res) => {
    console.info(`${req.method} request received`);
    // Takes info from user
    const { title, text } = req.body;
    if (title && text) {
        const newNote = {
          title,
          text,
          id: uuidv4(),
        };
    // Stores user input in json file
    readAndAppend(newNote, './db/db.json');
    
    const response = {
        status: 'success',
        body: newNote
    }
    console.log(response)
      res.json(response);
} else {
    res.json('Error in creating note');
  }
});

// Delete request for the notes API
apiRte.delete('/notes/:id', (req, res) => {
    console.info(`${req.method} request received`);
    // Grabs unique ID from the request parameters
    const deleteId = req.params.id;
    // Reads data in json file, parses it 
    readFromFile('./db/db.json')
    .then((data) => {
        const parsedData = JSON.parse(data);
        // Loops through parsed data, splices out the entry with matching ID
        for (let i = 0; i < parsedData.length; i++) {
            if (parsedData[i].id === deleteId) {
                parsedData.splice(i, 1)
                console.log(parsedData);
                break;
            }    
        }
        // Overwrites json file with entry removed
        writeToFile('./db/db.json', parsedData);
        res.json({ message: 'Note deleted successfully' });
    })
    .catch((error) => {
        console.error('Error:', error);
        res.json({ error: 'Error in deleting note' });
      }
     )

});

module.exports = apiRte;