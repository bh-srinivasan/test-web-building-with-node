const express = require('express');

const speakerRoute = require('./speakers');

const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = params => {
 
    router.get('/', async (request, response) => {
       /* console.log('Coming Here!');
        if (!request.session.visitcount) {
            request.session.visitcount = 1;
        } else {
            request.session.visitcount += 1;
        }
        console.log(request.session.visitcount); */
        const { speakerService } = params;
        const topSpeakers = await speakerService.getList()
        console.log(topSpeakers);
        response.render('layout/index', { pageTitle: 'Welcome Everyone', template: 'index', topSpeakers } );

  });
    router.use('/speakers', speakerRoute(params));
    router.use('/feedback', feedbackRoute(params));

  return router;
};