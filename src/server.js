// server configuration happens in server.js

const express = require('express');

// make server insatnce
const app = express();

app.get("/", (request, response) => {
    response.json({
        message:"Hello welcome to the backend code of the project"
    });
});

module.exports = {
    app
}