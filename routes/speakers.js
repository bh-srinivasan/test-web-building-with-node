const express = require('express');

const router = express.Router();

var fs = require('fs');
var path = require('path');

module.exports = params => {

    const speakersService = params.speakerService;

    router.get('/', async (request, response) => {
        const Speakers = await speakersService.getList();
        const artWork= await speakersService.getAllArtwork();
        response.render('layout/index', { pageTitle: 'Speakers', template: 'speakers', Speakers,artWork });
        /* if (!request.session.visitcount) {
           request.session.visitcount = 1;
       } else {
           request.session.visitcount += 1;
       }
       console.log(request.session.visitcount); */
    });

    router.get('/:shortname', async (request, response) => {
        const speaker = await speakersService.getSpeaker(request.params.shortname)
        console.log(speaker);
        // get the data for Artworks
        const artWork = await speakersService.getArtworkForSpeaker(request.params.shortname);
        console.log(`Artwork list : ${artWork}`);
        response.render('layout/index', { pageTitle: 'Speakers', template: 'speaker-details', speaker, artWork });

        /* 
        // Find image file for respective speaker
        const speakerName = request.params.shortname;
        console.log(`Speaker Identified is: ${speakerName}`);
        
        // Another way to search for Files by their names8j7
        const imageFiles = [];
        console.log(`Directory Identified is: ${path.join(__dirname, '../static/images/artwork')}`)
      
        fs.readdir(path.join(__dirname, '../static/images/artwork'), (err, files) => {
          if (err) {
            console.error(err);
            return res.status(500).send('Error reading directory');
          }
      
          files.forEach(file => {
            console.log(`Checking file: ${file}`);
            if (file.match(`^${speakerName}.*_tn.jpg$`)) {
              imageFiles.push(file);
            }
          });
          console.log(`Found imageFiles: ${imageFiles}`);
      
        }); */ 

      });
      
      return router;
      };
      
      
