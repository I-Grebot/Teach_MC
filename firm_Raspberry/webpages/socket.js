var teachMcApp = angular.module('TeachMcApp', [])

teachMcApp.factory('socket', function ($rootScope) {
  var socket = io.connect('/')
  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {
        var args = arguments
        $rootScope.$apply(function () {
          callback.apply(socket, args)
        })
      })
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args)
          }
        })
      })
    }
  }
})

teachMcApp.controller('TeachMcController', function ($scope, socket) {
  // data exposed to HTML
  $scope.message = ''
  $scope.responses = []

  $scope.pid = {
    p: 3,
    i: 4,
    d: 5
  }

  // methods exposed to HTML
  $scope.sendMessage = function () {
    var data = {
      type: 'I2C',
      message: $scope.pid,
      author: 'igrebot'
    }
    socket.emit('message', JSON.stringify(data))

    $scope.message = ''
  }

  // event called when a message is received by SocketIO
  socket.on('message', function (message) {
    console.log('Message from the server arrived')
    message = JSON.parse(message)
    console.log(message)

    $scope.responses.push(message)
  })
})
