const express = require('express');

const router = express.Router();


module.exports = () => {

    console.log('Coming here');
    router.get('/', (request, response) => response.render('pages/speakers'));
    router.get('/:shortname', (request, response) => response.send(`Detail page of ${request.params.shortname}`));

  /* router.get('/', (request, response) => response.send('Speakers list'));

     */


  return router;
};
