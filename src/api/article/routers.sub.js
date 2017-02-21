const router = require( 'express' ).Router()
const controllers = require( './controllers' )

router.post( '/v1', controllers.add )

module.exports = router