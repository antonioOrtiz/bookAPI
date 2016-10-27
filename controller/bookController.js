var bookController = function bkCtrlHndlr(Book) {
    // body... 
    var post = function(req, res) {
            var book = new Book(req.body);

            book.save();
            res.status(201).send(book);
        },
        get = function(req, res) {
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
        };
    return {
        post: post,
        get: get
    };
};

module.exports = bookController;
