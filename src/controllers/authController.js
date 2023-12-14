const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');

// Sign up a new user
module.exports.signup = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400).json({ message: 'Please enter all fields'});
        return;
    }

    try {
        const user = await User.findOne({ email });

        if (user) {
            res.status(400).json({ message: 'User already exists'});
            return;
        }

        const newUser = new User({ name, email, password });

        // Creates a salt and hash for passwords
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        newUser.password = hash;

        const savedUser = await newUser.save();

        const token = jwt.sign(
            { id: savedUser._id },
            config.get('jwtsecret'),
            { expiresIn: 3600}
        );

        res.json({
            token,
            user: {
                id: savedUser._id,
                name: savedUser.name,
                email: savedUser.email
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error'});
    }    
};

