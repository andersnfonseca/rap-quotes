const app = require('./src/app')
const http = require('http')
require('dotenv').config()
const debug = require('debug')('nodestr:server')

const port = normalizePort(process.env.PORT || '3000')
app.set('port', port)

const server = http.createServer(app)

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)
console.log(`Servidor rodando em http://localhost:${process.env.PORT}`)

// Normalizando porta 
function normalizePort(value) {
  const port = parseInt(value, 10)

  if(isNaN(port)) {
    return value
  }

  if (port => 0) {
    return port 
  }
  return false
}

// Tratamento de erros do servidor 
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }
  const bind = typeof port === 'string' ?
  'Pipe ' + port : 
  'Port ' + port

switch (error.code) {
  case 'EACESS': 
    console.error(bind + ' requires elevated privileges') // é necessário outro nível de acesso
    process.exit(1)
    break
  case 'EADDRINUSE':
    console.error(bind + ' is alred in use') // a porta já está em uso
    process.exit(1)
    break
  default:
    throw error;
  }
}

// Debug
function onListening() {
  const addr = server.address()
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  debug('Listening on ' + bind)
}