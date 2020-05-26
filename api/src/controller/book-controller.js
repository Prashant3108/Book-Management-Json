const bookService = require('../services/book-store')

exports.getBooks = async (req, res) => {
    try {
        let books = await bookService.getBooks();
        return res.status(200).json({
            result: books,
            status: true
        })
    } catch (err) {
        return res.status(500).json({
            result: err,
            status: false
        })
    }
}

exports.getBook = async function (req, res) {

    let book_id = req.params.book_id

    try {
        let book = await bookService.getBookById(book_id);
        return res.status(200).json({
            result: book || 'No Record Found',
            status: true
        })
    } catch (err) {
        return res.status(500).json({
            result: err,
            status: false
        })
    }



}

exports.addBook = async function (req, res) {

    let book_name = req.body.book_name
    let author_name = req.body.author_name
    let publish_date = req.body.publish_date
    let genre = req.body.genre

    try {
        let books = await bookService.addBook({ book_name, author_name, publish_date, genre });
        return res.status(201).json({
            result: true,
            status: true
        })
    } catch (err) {
        return res.status(500).json({
            result: err,
            status: false
        })
    }

}

exports.updateBook = async function (req, res) {
    let book_id = req.params.book_id
    let book_name = req.body.book_name
    let author_name = req.body.author_name
    let publish_date = req.body.publish_date
    let genre = req.body.genre

    try {
        await bookService.updateBook({ book_id, book_name, author_name, publish_date, genre });
        return res.status(201).json({
            result: true,
            status: true
        })
    } catch (err) {
        return res.status(500).json({
            result: err,
            status: false
        })
    }

}

exports.removeBook = async function (req, res) {

    let book_id = req.params.book_id

    try {
        await bookService.removeBook(book_id);
        return res.status(200).json({
            result: true,
            status: true
        })
    } catch (err) {
        return res.status(500).json({
            result: err,
            status: false
        })
    }




}