const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User'); //the order of User and passport very important
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); //equals the two lines below
// const authRoutes = require('./routes/authRoutes'); (returns a function)
// authRoutes(app);

app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is up on port ${PORT}`));