const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Book = require('./models/Book');
const cors = require('cors');

// Connecting to mongo db database -> book-store
mongoose.connect('mongodb://localhost:27017/book-store')
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log("DB Connection failed"));

app.use(cors({
    origin: ['http://localhost:3000']
}));
    
app.get('/books', async(req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json(books);
    }
    catch (e) {
        res.status(404).json({ error: 'Cannot fetch the books at the moment' });
    }
});

app.get('/book/:bookid', async(req, res) => {
    const { bookid } = req.params;
    try {
        const book = await Book.findByIdAndUpdate(bookid, { $inc: { clickCount: 1 } },{new:true});
        res.status(200).json(book);
    }
    catch (e) {
        res.status(404).json({ error: 'Cannot fetch the books at the moment' });
    }
});

app.listen(8080, () => {
    console.log("server started at http://localhost:8080");
});
