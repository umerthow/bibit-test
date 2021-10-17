const server = require('./src/app')
require('dotenv').config()
server.listen(8080)

console.log('running..')