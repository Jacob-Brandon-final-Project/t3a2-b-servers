// server configuration happens in server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const cartRoutes = require('./routes/CartRoutes');
const userController = require('./controllers/UserController');
const productController = require('./controllers/productController');

// make server insatnce
const app = express();


// Connect to MongoDB
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Check for database connection errors
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Check for successful database connection
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB database');
});

// Enables request.body to be raw JSON
app.use(express.json());

// Enalbes CORS for all routes
app.use(cors());

app.use('/cart', cartRoutes);
app.use('/users', userController);
app.use('/products', productController);

app.get("/product", async (request, response) => {
    const data = await productModels.find({})
    response.send(JSON.stringify(data))
});

app.get("/", (request, response) => {
    response.json({
        message:"Hello welcome to the backend code of the project"
    });
});

// sign up
app.post("/signup", async (request, response) => {
    const { email } = request.body;

    userModels.findOne({ email: email }, (err, result) => {
        console.log(err);
        if (result) {
            response.send ({message: "Email id is already registered!", alert: false });
        } else {
            const data = userModels(req.body);
            const save = data.save();
            response.send({ message: "Successfully sign up", alert: true });
        }
    });
});

//log-in
app.post("/login", (request, response) => {
    console.log(req.body)
    const {email} = request.body;
    userModels.findOne({ email: email}, (err, result) => {
        if (result) {
            const dataSend = {
                _id: result._id,
                firstName: result.firstName,
                lastName: result.lastName,
                email: result.email,
            };
            response.send({message : "Login is successfull!", alert: true, data: dataSend});
            console.log(dataSend);
            response.send({
                message: "Email is not available. Please sign up!",
                alert: false,
            });
        }
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



module.exports = {
    app
}