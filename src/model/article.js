const mongoose = require('mongoose')

const article = {
	title: String,
	detail: String
}

const options = {
	collection: 'Article'
}

const articleSchema = new mongoose.Schema( article, options )

module.exports = mongoose.model( 'Article', articleSchema )