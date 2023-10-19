const express = require('express');
const apiRte = require('./routes/apiRoutes.js');
const htmlRte = require('./routes/htmlRoutes.js');
const app = express();
const PORT = process.env.PORT || 3001;

//Parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Static middleware
app.use(express.static('public'));

//Routes middleware
app.use('/api', apiRte);
app.use('/', htmlRte);

//Port listener, log to confirm listen
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));