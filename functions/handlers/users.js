// This contains the handlers for all the requests to the users route
const {db, admin} = require('../util/admin');
const firebase = require('firebase');
const config = require('../util/config');
firebase.initializeApp(config);

const {validateSignUpData, validateLoginData, reduceUserDetails} = require('../util/validators');


// Sign users up
exports.signUp = (req, res) => {
  // Assign  data sent in request body to newUser
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
  };

  const {valid, errors} = validateSignUpData(newUser);
  if (!valid) return res.status(400).json(errors);

  const noImg = 'default-profile.png';

  let token; let userId;
  // Go into users collection and see if there's already a user with
  // the phone just passed in by the request.
  db.doc(`/users/${newUser.phone}`)
      .get()
      .then((doc) => {
        if (doc.exists) {
        // 400 = Bad Request
          return (
            res.status(400)
            // Err's name is handle
                .json({handle: 'There is already an account with this number.'})
          );
        } else {
        // if there's isnt'a  user then create one.
          return firebase
              .auth()
              .createUserWithEmailAndPassword(newUser.email, newUser.password);
        }
      })
      .then((data) => {
        userId = data.user.uid;
        return data.user.getIdToken();
      }) // this .then is for when the getIdToken comes back/returns
      .then((idToken) => {
        token = idToken;
        const userCredentials = {
          phone: newUser.phone,
          email: newUser.email,
          first:newUser.firstName,
          last:newUser.lastName,
          createdAt: new Date().toISOString(),
          image: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${noImg}?alt=media`,
          userId,
        };
        // Create new user document in the "users" collection & names it handle that
        // it was passed by the req body. Creates collection if it doesn't exist.
        // Set creates document.
        return db.doc(`/users/${newUser.phone}`).set(userCredentials);
      }) // this .then is for when the set function returns
      .then(() => {
        return res.status(201).json({token});
      })
      .catch((err) => {
        console.error(err);
        if (err.code === 'auth/email-already-in-use') {
        // 400 client error/bad request
          return res.status(400).json({email: 'Bruh this email taken'});
        } else {// 500 = Server error
          res.status(500).json({general: 'Something went wrong, please try again'}); 
        }
      });
};


// Log user in
exports.login = (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  const {valid, errors} = validateLoginData(user);
  if (!valid) return res.status(400).json(errors);

  firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then((data) => {
        return data.user.getIdToken();
      })
      .then((token) => {
        return res.json({token});
      })
      .catch((err) => {
        console.error(err);
        // auth/wrong-password
        // auth/user-not-found
        if (err.code === 'auth/wrong-password') {
          return res
              .status(403)
              .json({general: 'Wrong credentials, please try again'});
        } else return res.status(500).json({error: err.code});
      });
};