const express = require( 'express' ),
			bodyParser = require('body-parser'),
			mongoose = require( 'mongoose' )
const rootRouter = require( './src/routers.root' )

// 链接数据库
mongoose.connect( 'mongodb://localhost/cms' )

const app = express()
// 格式化请求
app.use( bodyParser.urlencoded({ extended: false }) )
// 路由
rootRouter( app )
// 静态服务器
app.use( express.static('static') )

// 监听端口
app.listen( 3000, () => {
	console.log( 'listen 3000 ...' )
})