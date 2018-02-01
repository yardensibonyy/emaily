const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey); //'sk_test_ft4QmPknYtJpyuTALTNzIw5q'
const requireLogin = require('../middlewares/requireLogin'); //middleware to make sure user's logged in

module.exports = (app) => {
    app.post('/api/stripe', requireLogin, (req, res) => {
        stripe.charges.create({
            amount: 500,
            currency: 'usd',
            description: '$5 for 5 credits',
            source: req.body.id
        }, (err, charge) => {
            if (err) {
                return console.log('err', err);
            }
            console.log(req.user);  
            //Updating user's credits in DB
            req.user.credits += 5;
            req.user.save().then((user, err) => {
                if (err) {
                    return console.log('err', err);
                }
                res.send(user);
            }).catch((e) => console.log(e));
        });  
    });
};