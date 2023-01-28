// Define express and path variables
const express = require('express');
const path = require('path');

// Create a variable for Route where different items can be routed
const cookieSession = require('cookie-session');
const routes = require('./routes/index');

// Import Cookies

// Import Feedback and SpeakerService js
const FeedbackService = require('./services/FeedbackService');
const SpeakerService = require('./services/SpeakerService');

// Call constructors of FeebackService and SpeakerService
const feedbackService = new FeedbackService('./data/feedback.json');
const speakerService = new SpeakerService('./data/speakers.json');


// Create an instance for Express
const app = express();

// Create a port where we can listen
const port = 3000;

// Setting express template and views path
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, './static')));

app.use('/', routes({
    feedbackService,
    speakerService
    }));

// SetupnCookies
app.use(cookieSession({
    name: 'session',
    keys: ['secretKey1', 'secretKey2'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.listen(port, () => {
    console.log(`Express server listening on port ${port}!`);
});