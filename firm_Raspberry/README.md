#Description
*No description yet*

Used technologies :
* NodeJS -> https://nodejs.org/en/ 
* ExpressJS -> http://expressjs.com/fr/
* SocketIO -> http://socket.io/
* AngularJS -> https://angularjs.org/

Current project's state does not implement SPI communication and the interface is just a POC

#Installation

##Raspberry Pi
This project can be executed on a Raspberry Pi running Raspbian.

####Update your RPi
```
sudo apt-get update
sudo apt-get dist-upgrade
```

####Install nodejs
```
wget http://node-arm.herokuapp.com/node_latest_armhf.deb 
sudo dpkg -i node_latest_armhf.deb
```

####(not yet used) WiringPi installation
```
sudo apt-get install git-core
git clone git://git.drogon.net/wiringPi
cd wiringPi
./build
```

####Run the node server
```
sudo node server.js
```

####Access the client from a browser
```
http://localhost:8124/socket.html
```

##Windows
This project can be executed on Windows for testing purposes (the GPIO access must be mocked)

####install nodejs
Download and install nodejs from this address : https://nodejs.org/en/

####Run the node server
```
node server.js
```

####Access the client from a browser
```
http://localhost:8124/socket.html
```