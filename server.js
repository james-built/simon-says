const express = require('express')
const server = express()
module.exports = server

const routes = require('./routes')

server.use('/', routes)
server.use(express.static('styles'))
server.use(express.static('sounds'))
server.use(express.static('script'))