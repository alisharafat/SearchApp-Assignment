const mongoose = require('mongoose');
const DUMMY_BOOKS = require('./Data.json');
const Book = require('./models/Book');


// Connecting to mongo db database -> book-store
mongoose.connect('mongodb://localhost:27017/book-store')
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log("DB Connection failed"));


async function seedDB() {
    await Book.deleteMany({});
    await Book.insertMany(DUMMY_BOOKS);
    console.log("DB SEEDED!!");
}

seedDB();



