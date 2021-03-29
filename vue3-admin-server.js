const server = require('pushstate-server')

server.start({
  port: 5018,
  directory: './dist'
})