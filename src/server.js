// server configuration happens in server.js

const express = require('express');
const cors = require('cors');

// make server insatnce
const app = express();

// Enables request.body to be raw JSON
app.use(express.json());

// Enalbes CORS for all routes
app.use(cors());

app.get("/", (request, response) => {
    response.json({
        message:"Hello welcome to the backend code of the project"
    });
});

const userController = require('./controllers/UserController');
app.use("/users", userController);

module.exports = {
    app
}