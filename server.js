import express from 'express';
import path from 'path';

const app = express();

const port = 3000;

const routes = require('./routes');

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.static(path.resolve('./static')));

app.use("/", routes());

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});