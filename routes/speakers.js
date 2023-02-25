const express = require('express');

const router = express.Router();

module.exports = params => {

    const speakersService = params.speakerService;

    router.get('/', async (request, response,next) => {
        try{
        const Speakers = await speakersService.getList();
        const artWork= await speakersService.getAllArtwork();
        return response.render('layout/index', { pageTitle: 'Speakers', template: 'speakers', Speakers,artWork });
        }
        catch(err){
          return next(err);
        }
        
       
    });

    router.get('/:shortname', async (request, response,next) => {
        try{
          const speaker = await speakersService.getSpeaker(request.params.shortname)
        // console.log(speaker);
        // get the data for Artworks
        const artWork = await speakersService.getArtworkForSpeaker(request.params.shortname);
        // console.log(`Artwork list : ${artWork}`);
        return response.render('layout/index', { pageTitle: 'Speakers', template: 'speaker-details', speaker, artWork });

        }
        catch(err){
          return next(err);
        }
        
      });
      
      return router;
      };
      
      
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
