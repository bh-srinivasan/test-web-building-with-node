const express = require('express');
const path = require('path');

<<<<<<< Updated upstream
const routes = require('./routes');
=======
// eslint-disable-next-line import/extensions
import myFunction from './routes/index.js';
>>>>>>> Stashed changes

const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static')));

app.use('/', routes());

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});
