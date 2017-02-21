const fs = require( 'fs' ),
			path = require( 'path' )

require( 'marko/node-require' ).install()


module.exports = ( data, type ) => {
	const fromPath = `/template/${ type }.marko`,
				toPath = `./static/${ data._id }.html`

	const src = require( path.join(__dirname + fromPath) )
	const dest = fs.createWriteStream( toPath, {encoding: 'utf8'} )
	src.stream( data ).pipe( dest )
}