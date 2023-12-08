const mongoose = require('mongoose');
const { databaseConnect } = require('./database');

databaseConnect().then(() => {
    
    console.log("Creating seed data!!");

    const AshDB = mongoose.model('Ash', {
        name: String,
        Email: String
    })
})