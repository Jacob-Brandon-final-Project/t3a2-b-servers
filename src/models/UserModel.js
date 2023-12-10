const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const validator = require('validator');

const bcrypt = require('bcryptjs')



const UserSchema = new mongoose.Schema({
    // Name of the user
    name: {
        type: String,
        required: true,
        unique: true
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
        validate: {
            validator: function (value) {
                let passwordRules = {
                    minlength: 6,
                    minLowercase: 1,
                    minUppercase: 1,
                    minNumber: 3,
                    minSymbols: 2
                };
                return validator.isStrongPassword(value, passwordRules);
            },
            message: props => `${props.value} does not meet password requirements!!`
            
        }
    },
    // Facebook account details of the user
    facebook: {
        id: String,
        email: String,
        name: String
    },
    // Google account details of the user
    google: {
        id: String,
        email: String,
        name: String
    },
    // Instagram details of the user
    instagram: {
        id: String,
        username: String
    }

});
// Use instance.save
//to trigger this pre-hook
UserSchema.pre(
    'save',
    async function (next) {
        const user = this;
        // If password wasn't changed to plaintext, skip next function
        if (!user.isModified('password')) return next();
        // If password was changed, assume it was changed to plaintext and hash it
        const hash = await bcrypt.hash(this.password, 10);
        this.password = hash;
        next();
    }
);

const User = mongoose.model('User', UserSchema);


module.exports = { User }
module.exports = mongoose.model('User', UserSchema);

