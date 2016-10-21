var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),

    db = mongoose.connect('mongodb://localhost/bookAPI'),
    Book = require('./models/bookModel'),
    port = process.env.PORT || 8016,
    app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var bookRouter = require('./routes/bookRoutes.js')(Book);


app.get('/', function rootHndlr(req, res) {
    /* body... */
    res.send('welcome to my API!');
});

app.use('/api', bookRouter);

app.listen(port, function listenHndlr() {
    console.log('Gulp is running my app on PORT ' + port);
});
