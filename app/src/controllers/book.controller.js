const db = require("../scripts/database");
const Book = db.book;


exports.getBookById = async function (request, response, next) {
    if (!request.body) return response.sendStatus(400);

    try {

        const requestData = {
            book_id: request.body.book_id,
        };

        const book = await Book.findOne({
            where: {
                id: requestData.book_id,
            }
        });

        if (!book) {
            return response.status(400).json("No book found");
        }

        response.status(200).json({book: book});
    } catch (e) {
        return next(e);
    }
}

exports.getBooks = async function (request, response, next) {
    if (!request.body) return response.sendStatus(400);

    try {
        const books = await Book.findAll();
        if (!books) {
            return response.status(400).json("No book found");
        }

        response.status(200).json({books: books});
    } catch (e) {
        return next(e);
    }
}

exports.addBook = async function (request, response, next) {
    if (!request.body) return response.sendStatus(400);

    try {
        const requestData = {
            name: request.body.book.name,
            author: request.body.book.author,
            year: request.body.book.year,
            count_of_pages: request.body.book.count_of_pages,
            isbn: request.body.book.isbn,
        };

        const book = await Book.create(requestData);

        response.status(200).json({book: book});
    } catch (e) {
        return next(e);
    }
}

exports.updateBook = async function (request, response, next) {
    if (!request.body) return response.sendStatus(400);

    try {
        const requestData = {
            id: request.body.book.id,
            name: request.body.book.name,
            author: request.body.book.author,
            year: request.body.book.year,
            count_of_pages: request.body.book.count_of_pages,
            isbn: request.body.book.isbn,
        };

        const status = await Book.update(requestData, {
            where: {
                id: requestData.id,
            },
        });

        response.status(200).json({message: "Update successfully!"});
    } catch (e) {
        return next(e);
    }
}

exports.deleteBook = async function (request, response, next) {
    if (!request.body) return response.sendStatus(400);

    try {
        const requestData = {
            id: request.body.id,
        };

        const status = await Book.destroy({
            where: {
                id: requestData.id,
            },
        });

        response.status(200).json({message: "Delete successfully!"});
    } catch (e) {
        return next(e);
    }
}