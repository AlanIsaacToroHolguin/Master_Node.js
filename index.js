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

// TODO: Here you can define your routes (e.g., app.get, app.post, etc.)

// Start the server and listen for HTTP requests
app.listen(port, () => {
    console.log("Server running on port " + port);
});
