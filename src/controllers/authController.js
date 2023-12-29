const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcrypt');

// Sign up a new user
module.exports.signup = async (req, res) => {
    const { name, email, password } = req.body;
    console.log(`Received signup data: ${name}, email: ${email}, password: ${password}`);

    if (!name || !email || !password) {
        res.status(400).json({ message: 'Please enter all fields'});
        return;
    }

    try {
        const user = await User.findOne({ email });

        if (user) {
            console.error(`User already exists with emai;: ${email}`);
            res.status(400).json({ message: 'User already exists'});
            return;
        } else {
            console.log(`No existing user found with email: ${email}`);
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

// log into an existing user
module.exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ message: ' Please enter all fields'});
        return;
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            res.status(400),json({ message: 'User does not exist' });
            return;
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            res.status(400).json({ message: 'Invalid credentials' });
            return;
        }

        const token = jwt.sign(
            { id: user._id },
            config.get('jwtsecret'),
            { expiresIn: 3600 }
        );

        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        res.json(500).json({ message: 'Server Error'});
    }
};

// Get user information
module.exports.get_user = async (req, res) => {
    try {
        user = await User.findById(req.user.id).select('-password');

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server Error'});
    }
};

