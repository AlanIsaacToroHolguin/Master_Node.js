const {Schema , model} = require("mongoose");

constArticleSchema =Schema({
    title:{
        type: String,
        required: true,
        unique: true,
        
    },
    content: {  
        type: String,
        required: true,
        trim: true

    },
    date: {
        type: Date,
        default: Date.now
    },
    image:{
        type: String,
        Default: "Default.png"
    } 
});

module.exports =model("Article", ArticleSchema);
//.articles