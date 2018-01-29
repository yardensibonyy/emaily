const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema ({
    googleId: String
});

//loads the schema and makes new collection named 'users' into mongoose
mongoose.model('users', userSchema);