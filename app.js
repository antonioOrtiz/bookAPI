var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    port = process.env.PORT || 8016;

var bookRouter = express.Router();

bookRouter.route('/books')
    .get(function (req, res) {
        /* body... */
        var responseJson = {hello: 'This is my api!'};
        res.json(responseJson);
    });


app.use('/api', bookRouter);

app.get('/', function rootHndlr(req, res) {
    /* body... */
    res.send('welcome to my API!');
});

app.listen(port, function listenHndlr(){
    console.log('Gulp is running my app on PORT ' + port);
});