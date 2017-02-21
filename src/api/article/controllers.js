const ArticleModle = require( './../../model/article' ),
			render = require( './../../render' )

exports.add = ( req, res ) => {
	const data = req.body
	// 存入数据库
	const article = new ArticleModle( data )
	article.save( (err, doc) => {
		if( err ) {
			console.error( err )
		}
		// 存入成功，返回数据，渲染成静态HTML文件
		render( doc, 'article' )
		res.send( '插入数据成功' )
	})
}