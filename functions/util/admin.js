// Firebase admin and API key imports

const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://deltabbt.firebaseio.com",
  storageBucket: 'deltabbt.appspot.com',
});

const db = admin.firestore();

module.exports = {admin, db};
