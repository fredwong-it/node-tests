var db = require('./db');

module.exports.handleSignup = (email, password) => {
    // Check if email already exists
    // Save the user to the databse
    db.saveUser({ email, password });
    // Send the welcome email

};