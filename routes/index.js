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
        const { speakerService } = params;
        const topSpeakers = await speakerService.getList()
        // console.log(topSpeakers);
        // Text variables
        var numSubmissions = "thousands";
        var numSelectedPieces = 201;
        var numFeaturedArtists = 12;
        var exhibitInfo = "The Roux Academy gets " + numSubmissions + " of submissions every year for artists interesting in participating in the CAC exhibits, and selects approximately " + numSelectedPieces + " distinct pieces of contemporary art for display in their collective exhibit. In addition, " + numFeaturedArtists + " individuals are honored as Featured Artists - each being granted his or her own exhibit hall to display entire collections or themed pieces.";
        var featuredArtistText = "Each Featured Artist has an opportunity to speak at one of our meetups and share his or her vision, perspective, and techniques with attendees on a more personal level than at our large conference. It is truly an honor to be a CAC Featured Artist and many past students artists who were featured at CAC have gone on to brilliant careers in art.";

        const artworkList = [
            { src: "./images/artwork/Lorenzo_Garcia_01_tn.jpg", alt: "Artwork 0" },
            { src: "./images/artwork/Lorenzo_Garcia_02_tn.jpg", alt: "Artwork 1" },
            { src: "./images/artwork/Lorenzo_Garcia_03_tn.jpg", alt: "Artwork 2" },
            { src: "./images/artwork/Lorenzo_Garcia_04_tn.jpg", alt: "Artwork 3" },
            { src: "./images/artwork/Hillary_Goldwynn_01_tn.jpg", alt: "Artwork 4" },
            { src: "./images/artwork/Hillary_Goldwynn_02_tn.jpg", alt: "Artwork 5" },
            { src: "./images/artwork/Hillary_Goldwynn_03_tn.jpg", alt: "Artwork 6" },
            { src: "./images/artwork/Hillary_Goldwynn_04_tn.jpg", alt: "Artwork 7" },
            { src: "./images/artwork/Hillary_Goldwynn_05_tn.jpg", alt: "Artwork 8" },
            { src: "./images/artwork/Hillary_Goldwynn_06_tn.jpg", alt: "Artwork 9" },
            { src: "./images/artwork/Hillary_Goldwynn_07_tn.jpg", alt: "Artwork 10" },
            { src: "./images/artwork/Riley_Rewington_01_tn.jpg", alt: "Artwork 11" },
            { src: "./images/artwork/Riley_Rewington_02_tn.jpg", alt: "Artwork 12" },
            { src: "./images/artwork/Riley_Rewington_03_tn.jpg", alt: "Artwork 13" },
            { src: "./images/artwork/Riley_Rewington_04_tn.jpg", alt: "Artwork 14" },
            { src: "./images/artwork/Riley_Rewington_05_tn.jpg", alt: "Artwork 15" },
            { src: "./images/artwork/Riley_Rewington_06_tn.jpg", alt: "Artwork 16" },
        ];

        response.render('layout/index', { pageTitle: 'Welcome Everyone', template: 'index', topSpeakers, exhibitInfo, featuredArtistText, artworkList} );

  });
    router.use('/speakers', speakerRoute(params));
    router.use('/feedback', feedbackRoute(params));

  return router;
};