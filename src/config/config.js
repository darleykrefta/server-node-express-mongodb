const mongoose = require( 'mongoose' )
const conString = 'mongodb://127.0.0.1/seminario-cliente-db'

mongoose.connect(conString)

module.exports = mongoose