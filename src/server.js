// server configuration happens in server.js

const express = require('express');
const cors = require('cors');

// make server insatnce
const app = express();

// Enalbes CORS for all routes
app.use(cors());

app.get("/", (request, response) => {
    response.json({
        message:"Hello welcome to the backend code of the project"
    });
});

module.exports = {
    app
}