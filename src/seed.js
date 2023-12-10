require('dotenv').config();

const mongoose = require('mongoose');
const { databaseConnect } = require('./database');



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