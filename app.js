var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 8016,

    db = mongoose.connect('mongodb://localhost/bookAPI'),
    Book = require('./models/bookModel'),
    bookRouter = express.Router();

app.use('/api', bookRouter);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', function rootHndlr(req, res) {
    /* body... */
    res.send('welcome to my API!');
});


bookRouter.route('/books')
    .post(function(req, res){
        var book = new Book(req.body);
        console.log(book);
        res.send(book);
    })
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
