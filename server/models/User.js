const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema ({
    googleId: String,
    credits: {type: Number, default: 0}
});

//loads the schema and makes new collection named 'users' into mongoose
mongoose.model('users', userSchema);