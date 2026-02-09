const express = require('express');
const path = require('path');
const api = require('./routing/api/api-notes');
const html = require('./routing/html/view-notes')


// Instance of the express app (express object);
const app = express();
const PORT = 3001;

// Tells express to look in public for client files rendering 
app.use(express.static('public'));

// Critical when setting up a POST or PUT route. 
app.use(express.json());
app.use(express.urlencoded({extended: true }));

// Middleware for HTML and API routing 
 app.use('/api',api);
 app.use('/', html);


app.listen(PORT, () => 
console.log(`Example app listening at http://localhost:${PORT}`))