const express = require('express');

const router = express.Router();


module.exports = params => {

    const speakersService = params.speakerService;

    router.get('/', async (request, response) => {

        /* if (!request.session.visitcount) {
            request.session.visitcount = 1;
        } else {
            request.session.visitcount += 1;
        }
        console.log(request.session.visitcount); */

        const speakers = await speakersService.getList();
        response.json(speakers);
});
    router.get('/:shortname', (request, response) => response.send(`Detail page of ${request.params.shortname}`));

  /* router.get('/', (request, response) => response.send('Speakers list'));

     */


  return router;
};
