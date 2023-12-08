const mongoose = require('mongoose');
const { databaseConnect } = require('./database');
require('dotenv').config();

databaseConnect().then(async() => {
    
    console.log("Creating seed data!!");

    const Person = mongoose.model('Person', {
        name: String,
        Email: String
    });

    let newPerson = Person({
        name: "Mick",
        Email: "Mickthemiddleman@yahoo.com.au",
    })

    await newPerson.save().then(() =>
    console.log("Mick is in the DB!!"))
})