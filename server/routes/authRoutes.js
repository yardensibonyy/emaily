const passport = require('passport');

module.exports = (app) => {
    app.get(
        '/auth/google',
        passport.authenticate('google', { //refers to GoogleStrategy object
            scope: ['profile', 'email'] //specifies to google what info we need from the user
        })
    );
    
    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/logout', (req, res) => {
        req.logout(); //takes the cookie and kills the ID in there 
        res.send(req.user);
    }); 

    app.get('/api/user', (req, res) => {
        res.send(req.user); //passport auto attaches user and other funcs to manipulate users' auth status such as logout() 
    });
};
