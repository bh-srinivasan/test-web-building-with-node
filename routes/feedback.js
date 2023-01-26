const express = require('express');

const router = express.Router();


module.exports = params => {
    const { feedbackService } = params;


    router.get('/', async (_request, response) => {

        const feedback = await feedbackService.getList();

        return response.json(feedback);
});

return router;
};
    // router.get('/:shortname', (request, response) => response.send(`Detail page of ${request.params.shortname}`));

    /* router.get('/', (request, response) => response.send('Speakers list'));
  
       */