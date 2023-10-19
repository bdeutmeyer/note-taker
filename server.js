const express = require('express');
const apiRoutes = require('./routes/apiRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');

const app = express();
const PORT = process.env.PORT || 3001;

//Parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Routes middleware
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
//Static middleware
app.use(express.static('public'));

//Port listener, log to confirm listen
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));