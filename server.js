// Define express and path variables
const express = require('express');
const path = require('path');

// Create a variable for Route where different items can be routed
const routes = require('./routes/index');

const app = express();

// Create a port where we can listen
const port = 3000;

// Setting express template and views path
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static')));

app.use('/', routes());

app.listen(port, () => {
    console.log(`Express server listening on port ${port}!`);
});