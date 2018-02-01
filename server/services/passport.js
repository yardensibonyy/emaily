const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

//pulls the model out of mongoose
const User = mongoose.model('users')

//The user id is saved in the session and later used to retrieve the whole object via the deserializeUser function. 
//serializeUser determines which data of the user object should be stored in the session/cookie.
//The result of the serializeUser method is attached to the session as req.session.passport.user = {}
passport.serializeUser((user, done) => {
    done(null, user.id); //user.id refers to the id generated by mongo and not the one who generated by google
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });     
});

passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true
    },  //callback
        async (accessToken, refreshToken, profile, done) => { 
            const existingUser =  await User.findOne({googleId: profile.id});  
            if(existingUser) {
                // we already have a record with that given profile ID
                done(null, existingUser);
            } else {
                // we don't have a user record with this ID, make a new record
                const user = await new User({googleId: profile.id}).save();
                done(null, user)
            }
        }
    )
);