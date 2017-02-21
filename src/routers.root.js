const articleRouter = require( './api/article/routers.sub' )

module.exports = app => {
	app.use( '/api/article', articleRouter )
	
	app.use( '/*', (req,res) => {
		res.send( 'Hello rtatic !' )
	})
}