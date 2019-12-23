const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = new Schema({
	name: String,
	genre: String,
	authorId: String,
	// id is not needed, mongodb creates that on it's own
});

module.exports = mongoose.model('Book', bookSchema);
