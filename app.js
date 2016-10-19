var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    port = process.env.PORT || 8016,

    db = mongoose.connect('mongodb://localhost/bookAPI'),
    Book = require('./models/bookModel'),
    bookRouter = express.Router();

app.get('/', function rootHndlr(req, res) {
    /* body... */
    res.send('welcome to my API!');
});

app.use('/api', bookRouter);

bookRouter.route('/books')
    .get(function(req, res) {
        /* body... */
        var query = {};
        if(req.query.genre){
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



app.listen(port, function listenHndlr() {
    console.log('Gulp is running my app on PORT ' + port);
});
