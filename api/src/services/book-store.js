const fs = require('fs');



// Get Books
// module.exports.getBooks = (callback) => {
// 	loadBooks((data) => {
// 		callback(data);
// 	});
// }

module.exports.getBooks = async () => {
	const books = await loadBooks();
	return books;
}

// Get Book
module.exports.getBookById = async (id) => {
	const data = await loadBooks();
	return data.find(x => x.book_id === id);
}

// Add Book
module.exports.addBook = async (book) => {
	const data = await loadBooks();
	data.push({ ...book, book_id: "1" });
	// data.push({
	// 	book_id: "",
	// 	book_name: book.book_name,
	// 	author_name: book.author_name,
	// 	publish_date: book.publish_date,
	// 	genre: book.genre
	// });
	saveBooks(data);
}

// Update Book
module.exports.updateBook = async (book) => {
	const data = await loadBooks();
	const _book = data.find(x => x.book_id === book.book_id);
	if (_book) {
		_book.book_name = book.book_name || _book.book_name;
		_book.author_name = book.author_name || _book.author_name;
		_book.publish_date = book.publish_date || _book.publish_date;
		_book.genre = book.genre || _book.genre;
	}

	saveBooks(data);
}

// Delete Book
module.exports.removeBook = async (id) => {
	const data = await loadBooks();
	const booksToKeep = data.filter(x => x.book_id !== id);
	saveBooks(booksToKeep);
}

const loadBooks = () => {
	return new Promise((resolve, reject) => {
		fs.readFile('../books.json', (err, data) => {
			resolve(JSON.parse(data.toString()))
		});

	});
}

const saveBooks = (books) => {
	const dataJSON = JSON.stringify(books);
	return new Promise((resolve, reject) => {
		fs.writeFile('../books.json', dataJSON, (err) => {
			if (err) {
				reject(err);
			}
			resolve();
		});

	})

}