/*
Pseudocode: 
 // GET  / - returns homepage with index.html file
 // GET  /api => hello world route, 
 // GET  /api/v1/pets => when user reaches this point they will see the array of pets as response. 
 // GET  /api/v1/pets/owner?owner=owner_name => User will receive an array of pets based on owner's name query
 // GET  /api/v1/pets/:name  => User will recieve an array of the pet with their name

*/


// import the pets array from data.js
const pets = require('./data.js');

// init express app
const express = require('express');
const app = express();

const PORT = 8080;

app.use(express.static("public"));


// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file
    res.sendFile(__dirname + "/public/index.html");

});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    // send the pets array as a response
    res.send(pets);

});

// get pet by owner with query string
// GET  /api/v1/pets/owner?owner=owner_name => User will receive an array of pets based on owner's name query
app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request
    const owner = req.query.owner;

    // find the pet in the pets array
    const ownerPets = pets.filter(pet => pet.owner.toLowerCase() === owner.toLowerCase());

    // send the pet as a response
    res.send(ownerPets);
});

// get pet by name
// GET  /api/v1/pets/:name  => User will recieve an array of the pet with their name
app.get('/api/v1/pets/:name', (req, res) => {
    // get the name from the request
    const name = req.params.name;

    // find the pet in the pets array
    const pet = pets.find(pet => pet.name.toLowerCase() === name.toLowerCase());

    // send the pet as a response
    res.send(pet);

});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;