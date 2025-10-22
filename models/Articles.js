// Import the Schema and model functions from the Mongoose library
const { Schema, model } = require("mongoose");

// Define the structure (schema) of our "Article" documents in MongoDB
const ArticleSchema = Schema({

    // "title" field: a string that is required and must be unique
    title: {
        type: String,
        required: true,   // Must always be provided
        unique: true,     // No two articles can have the same title
    },

    // "content" field: the main body text of the article
    content: {
        type: String,
        required: true,   // Content cannot be empty
        trim: true        // Removes extra spaces at the start or end
    },

    // "date" field: stores the date when the article was created
    date: {
        type: Date,
        default: Date.now  // Automatically sets the current date by default
    },

    // "image" field: optional image name for the article
    image: {
        type: String,
        default: "default.png"  // Default image if none is provided
    }
});

// Export the model so it can be used in other files
// The first argument "Article" will be the model name
// Mongoose automatically creates a collection called "articles" (lowercase + plural)
module.exports = model("Article", ArticleSchema);
