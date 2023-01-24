const express = require('express');

const speakerRoute = require('./speakers');

const router = express.Router();

module.exports = () => {
  router.get('/', (request, response) => {
    response.render('pages/index', { pageTitle: 'Welcome' });
  });
    router.get('/speakers', (request, response) => speakerRoute());

  return router;
};