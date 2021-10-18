const server = require('./src/app')
require('dotenv').config()
server.listen(process.env.PORT || 5000)

console.log('running..')