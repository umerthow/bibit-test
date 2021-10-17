const server = require('./src/app')
require('dotenv').config()
server.listen(80)

console.log('running..')