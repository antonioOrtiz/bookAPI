var express = require('express'),
    bookRouter = express.Router(),


    routes = function(Book) {
        /* body... */
        bookRouter.route('/books')
            .post(function(req, res) {
                var book = new Book(req.body);

                book.save();

                res.status(201).send(book);
            })
            .get(function(req, res) {
                /* body... */
                var query = {};
                if (req.query.genre) {
                    query.genre = req.query.genre;
                }
                Book.find(query, function(err, books) {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        // statement;
                        res.json(books);
                    }
                });
            });

        bookRouter.route('/books/:bookId')
            .get(function(req, res) { 
                /* body... */

                Book.findById(req.params.bookId, function(err, book) {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        // statement;
                        res.json(book);
                    }
                });
            });

       return bookRouter;

    };

module.exports = routes;
