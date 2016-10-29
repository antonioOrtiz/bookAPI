var bookController = function bkCtrlHndlr(Book) {
    // body... 
    var post = function(req, res) {
            var book = new Book(req.body);

            if(!req.body.title){
                res.status(400);
                res.send('Title is required');
            } else {
                book.save();
                res.status(201);
                res.send(book);
            }

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
