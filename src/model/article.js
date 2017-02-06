const mongoose = require('mongoose')
const Schema = mongoose.Schema

const article = {
	title: String,
	detail: String,
	hasHTML: Boolean
}

const options = {
	collection: 'Article'
}

const articleSchema = new Schema( article, options )

module.exports = mongoose.model( 'Article', articleSchema )