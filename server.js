import express from 'express';
import path from 'path';

const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.static(path.resolve('./static')));

console.log(`Restarting`)

app.get('/', (req, res) => {
    res.render('pages/index', { pageTitle: 'Welcome' });
});

app.get('/speakers', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile(path.resolve('./static/speakers.html'));
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});