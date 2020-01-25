const functions = require('firebase-functions');
const app = require('express')();
const FBAuth = require('./util/fbAuth');
const {db} = require('./util/admin');

const { getAllVenues } = require('./handlers/venues');
const {
    signUp,
    login,
    uploadImage,
    addUserDetails,
    getAuthenticatedUser,
    getUserDetails,
    markNotificationsRead,
  } = require('./handlers/users');


// Venues
app.get('/venues', getAllVenues);

// Users
app.post('/signup', signUp);
app.post('/login', login);



exports.api = functions.https.onRequest(app);


