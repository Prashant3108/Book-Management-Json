var express = require('express')
var router = express.Router()
const bookController = require('../controller/book-controller')

router.get('/api/books', bookController.getBooks);

router.get('/api/book/:book_id', bookController.getBook);

router.post('/api/book', bookController.addBook);

router.patch('/api/book/:book_id', bookController.updateBook);

router.delete('/api/book/:book_id', bookController.removeBook);

router.use(function (req, res, next) {
    return res.status(404).send({ err: 'Not found' });
});

module.exports = router