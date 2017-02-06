/*
const express = require( 'express' ),
			mongoose = require( 'mongoose' )

mongoose.connect( 'mongodb://localhost/cms' )

const app = express()
app.use( express.static('static') )
*/

const render = require( './src/render' )

/*
const article = {
	_id: 12,
	title: 'aaa',
	detail: 'asdasdasdczxca'
}
const htmlFileName = article._id + '.html'

const fromPath = './src/template/article.html',
			toPath = './static/' + htmlFileName

render( article, fromPath, toPath )
*/

const data = {
	_id: 25,
	name: 'James'
}
const fromPath = '/template/article.marko'
			toPath = './static/' + data._id + '.html'

render( data, fromPath, toPath )