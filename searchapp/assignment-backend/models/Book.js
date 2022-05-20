const mongoose = require('mongoose');

// Schema 
const bookSchema = new mongoose.Schema({
    author: String,
    country: String,
    imageLink: String,
    language: String,
    link: String,
    pages: Number,
    title: String,
    year: Number,
    clickCount: {
        type: Number,
        default:0
    }
});

const Book = mongoose.model('Book',bookSchema);

module.exports = Book;







