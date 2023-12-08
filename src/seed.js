const mongoose = require('mongoose');
const { databaseConnect } = require('./database');
require('dotenv').config();

databaseConnect().then(() => {
    
    console.log("Creating seed data!!");

    const AshDB = mongoose.model('Ash', {
        name: String,
        Email: String
    })
})