const mongoose = require("mongoose");
const schema = mongoose.Schema;

var bookSchema = new schema({
    bookName : {
        type: String,
        required: true
    },
    searchBookName : {
        type: String,
        required: true
    },
    authorName : {
        type: String,
        required: true
    },
    coverURL : {
        type: String,
        required: true
    },
    downloadLink : {
        type: String,
        required : true
    },
    rating : {
        type: String,
        default: "0"
    },
    added : {
        type: Date,
        default : Date.now() 
    }
})

var Books = mongoose.model("Books",bookSchema)
module.exports = {Books}