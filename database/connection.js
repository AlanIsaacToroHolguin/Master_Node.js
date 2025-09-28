// Import mongoose, the library that allows us to work with MongoDB
const mongoose = require('mongoose');

// Define an asynchronous function to connect to the database
const connectDB = async () => {
    try {      
        // Try to connect to the database "mi_blog"
        // localhost:27017 → local MongoDB address
        // "mi_blog" → name of the database (if it doesn’t exist, Mongo will create it)
        await mongoose.connect("mongodb://localhost:27017/mi_blog");

        // If the connection is successful, show this message in the console
        console.log("Database connected");
    } 
    catch (error) {
        // If an error occurs, log it in the console
        console.log(error);

        // Throw a new error so the server knows something went wrong
        throw new Error("Could not connect to database");
    }
}

// Export the function so it can be used in other files (e.g., index.js)
module.exports = { connectDB: connectDB };
