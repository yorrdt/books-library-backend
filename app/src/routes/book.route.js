module.exports = (app) => {
    const express = require('express');
    const authRouter = express.Router();
    const jsonParser = express.json();


    const bookController = require('../controllers/book.controller');

    authRouter.get('/get_book_by_id', jsonParser, bookController.getBookById);
    authRouter.get('/get_books', jsonParser, bookController.getBooks);
    authRouter.post('/add_book', jsonParser, bookController.addBook);
    authRouter.patch('/update_book', jsonParser, bookController.updateBook);
    authRouter.delete('/delete_book', jsonParser, bookController.deleteBook);

    app.use('/', authRouter);
}