const mongoose = require('mongogoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const UserSchema = new Schema({
    // Name of the user
    name: {
        type: String,
        required: true
    },
    // Email of the user
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    // Password of the user
    password: {
        type: String,
        required: [true, 'Please enter a valid password'],
        minlength: [6, 'Minimum password length must be 6 characters'],
        maxlength: [15, 'Maximum password length must be 15 characters'],
        validate: {
            validator: function(v) {
                // Reqular expression to check if password contains only alphanumeric characters
                return /^[a-zA-Z0-9]+$/.test(v);
            },
            message: 'Password should not contain special characters!'
        }
    },
    // Facebook account details of the user
    facebook: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    // Google account details of the user
    google: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    // Instagram details of the user
    instagram: {
        id: String,
        token: String,
        username: String
    }

});

module.exports = mongoose.model('User', UserSchema);