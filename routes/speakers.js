const express = require('express');

const router = express.Router();

console.log('Coming here');

module.exports = () => {

  router.get('/', (request, response) => response.send('Speakers list'));

  router.get('//:shortname', (request, response) => response.send(`Detail page of ${request.params.shortname}`));

  return router;
};
