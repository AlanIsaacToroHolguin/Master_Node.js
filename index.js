// Import the connectDB function from the database/connection.js file
const { connectDB } = require("./database/connection");

// Import Express framework to create the server
const express = require("express");

// Import CORS to allow requests from other domains
const cors = require("cors");

// Log a simple message to indicate that the Node app has started
console.log("Node app is running");

// Connect to the MongoDB database using the function defined in connection.js
connectDB();

// Create an instance of Express (this is our application)
const app = express();

// Define the port where the server will listen
const port = 3000;

// CORS setup → allows the server to handle requests from different origins
app.use(cors());

// Middleware: automatically parse incoming request bodies to JSON
app.use(express.json());

// Routes: Here you can define your routes (e.g., app.get, app.post, etc.)
// Example 1: Returning plain HTML as a response
/*app.get("/probando", (req, res) => {
    console.log("The endpoint was executed correctly");

    // res.send() can be used to send text or HTML
    return res.status(200).send(`
        <h1>Hello world from NodeJS and Express</h1>
    `);
});


// Example 2: Returning a JavaScript object with res.send()
// Express will automatically convert the object into JSON
app.get("/probando", (req, res) => {
    console.log("The endpoint was executed correctly");

    return res.status(200).send({
        Book: "Midnight Sun",
        Author: "Alan Toro",
        URL: "soldemedianoche.com"
    });
});
*/

// Example 3: Returning JSON explicitly using res.json()
// This is the most common way when building APIs
app.get("/probando", (req, res) => {
    console.log("The endpoint was executed correctly");

    return res.status(200).json([{
        Book: "Midnight Sun",
        Author: "Alan Toro",
        URL: "soldemedianoche.com"
    },
    {
        Book: "Be challenger in lol",
        Author: "Jarod Chavez",
        URL: "soldemedianoche.com"
    },
]);
});





// Start the server and listen for HTTP requests
app.listen(port, () => {
    console.log("Server running on port " + port);
});

