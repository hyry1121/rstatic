const articleModle = require( './../../model/article' )

exports.add = function() {
	var result = yield cateModel.create( this.request.body )
	this.response.body = {
		success: true,
		data: result
	}
}