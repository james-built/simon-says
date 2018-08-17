const server = require('./server')

const PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log('The server is listening on port', PORT)
})