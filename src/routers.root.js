const rootRouter = require( 'express' ).Router()
const articleRouter = require( './api/article/routers.sub' )

rootRouter.use( '/api/article', articleRouter.routes(), articleRouter.allowedMethods() )

module.exports = rootRouter