// import Express library
const express = require('express');
const { User } = require('../models/UserModel');

// make an instance of a Router
const router = express.Router();

// customise the router instance

// GET localhost:3000/users/
// Expect a response of ALL users in DB:

/*
    [
        {
            id:
            username:

        }

    ]

*/

router.get("/", async (request, response) => {
    let result = await User.find({});

    response.json({result});
})

// GET localhost:3000/users/id
router.get("/:id", async (request, response) => {

})


// POST localhost:3000/users/
router.post("/", async (request, response) => {
    let newUser = await User.create(request.body).catch(error => error);

    response.json(newUser);
})

// POST localhost:3000/users/login
// request.body = {username: "Admin", password: "somePassword"}
// respond with {jwt: "some big string", valid: true}
router.post("/login", async (request, response) => {
    let targetUser = User.findOne({username: request.body.username}).catch(error => error);
    let isPasswordCorrect = comparePassword(request.body.password, targetUser.password);
})

// GET localhost:3000/users/verify
// JWT in request.headers['jwt] or request.headers["authorisation"]
// respond with {jwt: "some big string", valid: true}
router.get("/verify", async (request, response) => {

})

// GET localhost:3000/users/regenerate
// respond with {jwt: "some big string", valid: true}
router.get("/regenerate", async (request, response) => {

})

module.exports = router;
