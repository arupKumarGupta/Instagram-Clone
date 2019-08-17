const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        minLength: 8
    },
    email: {
        type: String,
        required: true,
        match: /[a-zA-Z0-9]+@[a-zA-Z0-9]\..{2,3}/, // matches email
    },
    countryCode: String,

    phone: {
        type: String,
        match: /\d{6,10}$/
    }
});

const UserModel = mongoose.model('User',UserSchema);
module.exports = UserModel;