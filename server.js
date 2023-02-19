// Define express and path variables
const express = require('express');
const path = require('path');

// Create a variable for Route where different items can be routed
const cookieSession = require('cookie-session');
const routes = require('./routes/index');

// Import Feedback and SpeakerService js
const FeedbackService = require('./services/FeedbackService');
const SpeakerService = require('./services/SpeakerService');

// Call constructors of FeebackService and SpeakerService
const feedbackService = new FeedbackService('./data/feedback.json');
const speakerService = new SpeakerService('./data/speakers.json');

// Define Error Catching
const createError = require('http-errors');


// Create an instance for Express
const app = express();

// Create a port where we can listen
const port = 3000;

// Setting express template and views path
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static')));

app.set('trust proxy', 1);

// Set Global Variables
app.locals.siteName = 'ROUX Meetups';

// Set Variables for Home Page in response
app.use((request, response, next) => {
    response.locals.homeVar = 'Home';
    next();
});

// Try to get the Speaker List
app.use(async (request, response, next) => {
    try {
        const speakers = await speakerService.getNames();
        response.locals.speakersList = speakers;
        // console.log(response.locals);
        return next();
    }
    catch (err) {
        return next(err);
    }
    
});


// SetupnCookies
app.use(cookieSession({
    name: 'session',
    keys: ['Bhar123212', 'Vidh123212'],
    maxAge: 1 * 60 * 60 * 1000 // 24 hours
}));

app.use('/', routes({
    feedbackService,
    speakerService
    }));

    app.use((request, response, next) => {
        return next(createError(404, 'File not found'));
      });
      
      app.use((err, request, response, next) => {
        response.locals.message = err.message;
        console.error(err);
        const status = err.status || 500;
        response.locals.status = status;
        response.status(status);
        response.render('error');
      });
      

app.listen(port, () => {
    console.log(`Express server listening on port ${port}!`);
});