// arduino.js
var five = require("johnny-five"), board = new five.Board();

var io = require('socket.io')(8000);

board.on("ready", function() {

    // Create a new BioMEMS sensor (photoresistor) instance.
    sensor1 = new five.Sensor({
        pin: "A0", // Arduino analog input pin number
        freq: 500  // Sampling frequency (500 milliseconds = 2 Hz)
    });
	sensor2 = new five.Sensor({
        pin: "A1", // Arduino analog input pin number
        freq: 500  // Sampling frequency (500 milliseconds = 2 Hz)
    });

    // When a new sensor value is avaiable ("data"), execute {}
    sensor1.on("data", function() {
        console.log(this.value); // Show the sensor value on Windows Command Shell
        io.emit('sensorValue1', this.value); //Send the sensor value named "sensorValue" to the web client (e.g., sensorValue: 300)
    });
	sensor2.on("data", function() {
        console.log(this.value); // Show the sensor value on Windows Command Shell
        io.emit('sensorValue2', this.value); //Send the sensor value named "sensorValue" to the web client (e.g., sensorValue: 300)
    });

    // Create a new BioMEMS actuator (LED) instance on pin 11
    var actuator1 = new five.Led(11);
    io.on('connection', function(socket){
        // When the control value is received from the web client, execute {}
        socket.on('control1', function(controlValue){
            actuator1.brightness(controlValue); //Change the LED brightness to "controlValue"
        });
    });
	var actuator2 = new five.Led(10);
    io.on('connection', function(socket){
        // When the control value is received from the web client, execute {}
        socket.on('control2', function(controlValue){
            actuator2.brightness(controlValue); //Change the LED brightness to "controlValue"
        });
    });
	var actuator3 = new five.Piezo(8);
    io.on('connection', function(socket){
        // When the control value is received from the web client, execute {}
        socket.on('control3', function(controlValue){
            actuator3.frequency(controlValue, 10000); //Change the LED brightness to "controlValue"
        });
    });
});
