const express = require('express');

const router = express.Router();


module.exports = () => {

    router.get('/', (request, response) => response.render('pages/feedback'));

    // router.get('/:shortname', (request, response) => response.send(`Detail page of ${request.params.shortname}`));

    /* router.get('/', (request, response) => response.send('Speakers list'));
  
       */


    return router;
};