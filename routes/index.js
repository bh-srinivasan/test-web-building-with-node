const express = require('express');

const speakerRoute = require('./speakers');

const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = params => {
 
    router.get('/', (request, response) => {
       /* console.log('Coming Here!');
        if (!request.session.visitcount) {
            request.session.visitcount = 1;
        } else {
            request.session.visitcount += 1;
        }
        console.log(request.session.visitcount); */

        response.render('pages/index', { pageTitle: 'Welcome Everyone' }); 

  });
    router.use('/speakers', speakerRoute(params));
    router.use('/feedback', feedbackRoute(params));

  return router;
};