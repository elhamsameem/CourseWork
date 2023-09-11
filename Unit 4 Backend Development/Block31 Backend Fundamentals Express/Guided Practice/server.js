const express = require('express'); // Import express application
const app = express(); // Starts express server
const PORT = 8080; // PORT to run our server


// GET method for home/landing page
app.get("/", (req, res) => {
    res.send(`
    <h1>Hello, Welcome to Express Guided Practice</h1>
    <br/> 
        The following requests are available in the address bar for this express demo: 
            <ul>
                <li>"/hello" to receive a greeting message</li>
                <li>"/hello/your-name" to receive a special greeting message</li>
                <li>"/hello-query" to query a greeting message</li>
                <li>"/goal" to serve an html page. This is stretch goal for Express</li>
            </ul>
    `);
});

// Get method for /hello
app.get("/hello", (req, res) => { res.send(`Hello, you reached the greeting page`); });

// Get method /hello/:name
app.get("/hello/:name", (req, res) => {
    const name = req.params.name;
    // console.log(req.params);
    res.send(`Params Greetings, ${name}! Welcome to your page`);
});

// GET method for /hello-query
app.get("/hello-query", (req, res) => {
    const name = req.query.name;
    // user input: /hello-query?name=your-name
    res.send(`Query Greetings ${name}!`);
});

//Get method for /goal
app.get("/goal", (req, res) => {
    res.sendFile(__dirname + `/goal.html`);
});


app.listen(PORT, () => { console.log("Server is listening on port: " + PORT); });

// Run the server by typing in terminal: node server.js
// add a script in the package.json if you dont want to type node server.js to start a server. 
// add the followng to package.json in the script object: "start": "node server.js"
// Now if you run "npm start", it will run node server.js
// If you want to automatically start your server when you change things the use the developmental nodemon to do it. 
// npm install -D nodemon
// Then do "nodemon server.js" in terminal