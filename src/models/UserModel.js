const mongoose = require('mongogoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
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
    facebook: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    google: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    instagram: {
        id: String,
        token: String,
        username: String
    }

});

module.exports = mongoose.model('User', UserSchema);