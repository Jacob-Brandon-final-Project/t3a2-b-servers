// server configuration happens in server.js

const express = require('express');
const cors = require('cors');
const cartRoutes = require('./routes/CartRoutes');
const authRoutes = require('./routes/AuthRoutes');

// make server insatnce
const app = express();

// Enables request.body to be raw JSON
app.use(express.json());

// Enalbes CORS for all routes
app.use(cors());

app.use('/cart', cartRoutes);

// Register auth routes
app.use('/user', authRoutes)

app.get("/", (request, response) => {
    response.json({
        message:"Hello welcome to the backend code of the project"
    });
});


module.exports = { app };