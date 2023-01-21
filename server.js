import express from 'express';
import path from 'path';
import { dirname } from 'path';

const app = express();

const port = 3000;

app.use(express.static(path.resolve('./static')));


app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(path.resolve('./static/index.html'));
});

app.get('/speakers', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(path.resolve('./static/speakers.html'));
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});