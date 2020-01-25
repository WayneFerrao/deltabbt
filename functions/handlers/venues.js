// Handlers for all requests in the shouts route
const {db} = require('../util/admin');

exports.getAllVenues = (req, res) => {
  // .get() returns a promise which holds a querySnapshot, containing an array of documents
  db.collection('bbtVenues')
      .orderBy('name', 'desc')
      .get() // returns all documents as an array
      .then((data) => {
        const venues = [];
        // doc is just a reference. Use .data() returns data inside document
        data.forEach((doc) => {
          venues.push({
            venueId: doc.id,
            name: doc.data().name,
            address: doc.data().address,
            hours: doc.data().hours,
            image: doc.data().image,
          });
        });
        return res.json(venues);
      })// Returns a Promise -> good prac to put catch for potential errors.
      .catch((err) => console.error(err));
};