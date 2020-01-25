// Validator helper functions for login and user sign-in

const isEmail = (email) =>{
  // eslint-disable-next-line max-len
  // Regex ensuring text in email box is a valid email
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regEx)) return true;
  else return false;
};

const isEmpty = (string) => {
  if (string.trim()==='') return true;
  else return false;
};

exports.validateSignUpData = (data) => {
  // Create an error array and add to it when user messes up, if empty, sign up data is valid
  const errors = {};
  if (isEmpty(data.email)) {
    errors.email = 'Must not be empty';
  } else if (!isEmail(data.email)) {
    errors.email = 'Yo, your email aint valid fam';
  }

  if (isEmpty(data.password)) errors.password = 'You aint got a password?';
  if (data.password!== data.confirmPassword) {
    errors.confirmPassword = 'Passwords gotta match bruh';
  }

  if (isEmpty(data.firstName)) errors.handle = 'Bruh you aint got a first??';
  if (isEmpty(data.lastName)) errors.handle = 'Bruh you aint got a last??';
  if (isEmpty(data.phone)) errors.handle = 'Bruh you aint got a phone??';


  return {
    errors,
    // If no keys, no error, data valid -> true. Else false
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

exports.validateLoginData = (data) => {
  const errors = {};

  if (isEmpty(data.email)) errors.email = 'Must not be empty';
  if (isEmpty(data.password)) errors.password = 'Must not be empty';

  return {
    errors,
    // If no keys, no error, data valid -> true. Else false
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

exports.reduceUserDetails = (data) => {
  const userDetails = {};

  if (!isEmpty(data.bio.trim())) userDetails.bio = data.bio;
  if (!isEmpty(data.website.trim())) {
    // Prepend http:// if user does not add it.
    if (data.website.trim().substring(0, 4) !== 'http') {
      userDetails.website = `http://${data.website.trim()}`;
    } else userDetails.website = data.website;
  }
  if (!isEmpty(data.location.trim())) userDetails.location = data.location;

  return userDetails;
};
