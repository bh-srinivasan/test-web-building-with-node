const express = require('express');

const router = express.Router();


module.exports = params => {
    const {feedbackService} = params;

    router.get('/', async (request, response,next) => {
        try{
        const Feedback = await feedbackService.getList();
        return response.render('layout/index', { pageTitle: 'Feedback', template: 'feedback',Feedback  });
        }
        catch(err){
          return next(err);
        }
        
       
    });

return router;
};
    // router.get('/:shortname', (request, response) => response.send(`Detail page of ${request.params.shortname}`));

    /* router.get('/', (request, response) => response.send('Speakers list'));
  
       */