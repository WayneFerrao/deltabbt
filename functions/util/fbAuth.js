// Authentication middleware function

const {admin, db} = require('./admin');
module.exports = (req, res, next) => {
  let idToken; // initialize ID Token
  // Checks if the authorization header exists and if it starts with Bearer
  if (
    req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer ')) {
    // Extract the id token.
    idToken = req.headers.authorization.split('Bearer ')[1];
  } else {
    console.error('No token found');
    return res.status(403).json({error: 'Unauthorized'});
  }
  // Need to verify that token was issued by our application and not somewhere else
  admin.auth().verifyIdToken(idToken)
      .then((decodedToken) => { // holds user data inside token
        req.user = decodedToken;
        return db.collection('users')
            .where('userId', '==', req.user.uid)
            .limit(1) // limits results to 1 document
            .get();
      })
      .then((data) => {
        req.user.handle = data.docs[0].data().handle;
        req.user.imageUrl = data.docs[0].data().imageUrl;
        return next();
      })
      .catch((err) => { // token invalid, blacklisted
        console.error('Error while verifying token', err);
        return res.status(403).json(err);
      });
};
