/*

const fs = require( 'fs' )

const renderStrategies = {
	title( str, data ) {
		return str.replace( '{{ TITLE }}', data )
	},
	detail( str, data ) {
		return str.replace( '{{ DETAIL }}', data )
	}
}

function render( data, fromPath, toPath ) {
	// 读取模板
	const srcHTML = fs.readFileSync( fromPath, 'utf-8' )
	// 替换标记
	let destHTML = srcHTML
	for( let k in data ) {
		if( renderStrategies[k] ) {
			destHTML = renderStrategies[ k ]( destHTML, data[k] )
		}
	}
	// 存入静态目录
	fs.writeFileSync( toPath, destHTML )
}

module.exports = render

*/


const fs = require( 'fs' ),
			path = require( 'path' )
require( 'marko/node-require' ).install()

module.exports = ( data, fromPath, toPath ) => {
	const src = require( path.join(__dirname + fromPath) )
	const dest = fs.createWriteStream( toPath, {encoding: 'utf8'} )
	src.stream( data ).pipe( dest )
}