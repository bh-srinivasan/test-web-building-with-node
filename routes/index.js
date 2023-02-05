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
        // Getting list of speakers and passing to page
        try{
          const { speakerService } = params;
        const topSpeakers = await speakerService.getList()
        // console.log(topSpeakers);
        // Text variables
        var numSubmissions = "thousands";
        var numSelectedPieces = 201;
        var numFeaturedArtists = 12;
        var exhibitInfo = "The Roux Academy gets " + numSubmissions + " of submissions every year for artists interesting in participating in the CAC exhibits, and selects approximately " + numSelectedPieces + " distinct pieces of contemporary art for display in their collective exhibit. In addition, " + numFeaturedArtists + " individuals are honored as Featured Artists - each being granted his or her own exhibit hall to display entire collections or themed pieces.";
        var featuredArtistText = "Each Featured Artist has an opportunity to speak at one of our meetups and share his or her vision, perspective, and techniques with attendees on a more personal level than at our large conference. It is truly an honor to be a CAC Featured Artist and many past students artists who were featured at CAC have gone on to brilliant careers in art.";

        const artWork= await speakerService.getAllArtwork();

        return response.render('layout/index', { pageTitle: 'Welcome Everyone', template: 'index', topSpeakers, exhibitInfo, featuredArtistText,artWork} );
        }
        catch(err){
          return isNamedExportBindings(err);
        }
        

  });
    router.use('/speakers', speakerRoute(params));
    router.use('/feedback', feedbackRoute(params));

  return router;
};