var express = require('express')
var http = require('http')
var io = require('socket.io')
var SPI = require('pi-spi')
var os = require('os')

var spi
if(os.platform() === 'linux') {
  spi = SPI.initialize('/dev/spidev0.0') // MUST BE REPLACED WITH REAL SPI DEVICE NAME
  spi.clockSpeed(4e6) // MUST BE REPLACED WITH REAL SPI SPEED
} else {
  spi = function () {
  }

  spi.prototype.transfert = function() {}
}

var app = express()
app.use(express.static('./webpages'))
app.use('/angular', express.static('./node_modules/angular'))

var server = http.createServer(app).listen(8124)

io = io.listen(server)

io.sockets.on('connection', function (socket) {
  var messageToClient = {
    data: 'Connection with the server established'
  }

  socket.send(JSON.stringify(messageToClient))
  console.log('Socket.io Connection with the client established')

  socket.on('message', function (data) {
    data = JSON.parse(data)

    console.log(data)

    var ackToClient = {
      data: 'Server Received the message'
    }
    socket.send(JSON.stringify(ackToClient))
  })
})
