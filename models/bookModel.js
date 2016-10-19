var mongoose = require('mongoose'),
    Schema = mongoose.Schema,

bookModel = new Schema({
    title: {
        type: String
    },
    author: {
        type: String
    },
    genre: {
        type: String
    },
    read: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Book', bookModel);
