var express = require('express'),
    bookRouter = express.Router(),

    routes = function(Book) {
        /* body... */
        bookRouter.route('/')
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
        bookRouter.use('/:bookId', function(req, res, next) {
            /* body... */
            Book.findById(req.params.bookId, function(err, book) {
                if (err) {
                    res.status(500).send(err);
                } else if (book) {
                    // statement;
                    req.book = book;
                    next();
                } else {
                    res.status(404).send('no book found');
                }
            });
        });
        bookRouter.route('/:bookId')
            .get(function(req, res) {
                /* body... */
                res.json(req.book);
            })
            .put(function(req, res) {
                // statement;
                req.book.title = req.body.title;
                req.book.author = req.body.author;
                req.book.genre = req.body.genre;
                req.book.read = req.body.read;
                req.book.save();
                res.json(req.book);
            })
            .patch(function(req, res) {
                for (var p in req.body) {
                    // statement
                    req.body[p] = req.body[p];
                }
            });

        return bookRouter;

    };

module.exports = routes;
