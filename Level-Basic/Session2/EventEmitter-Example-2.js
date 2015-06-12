//Import 'events' module
var events = require('events');

//EventEmitter Class reference
var eventEmitter = require('events').EventEmitter;

//Create EventEmitter Object
var emitterObj = new eventEmitter();

//Define the callback function
var ringBell = function ringBell() {
	console.log('I am ringing');
};

//Associate callabck function with 'doorOpen' event
emitterObj.on('doorOpen', ringBell);

//More than one function can listen to a particular event
emitterObj.on('doorOpen', function () {
	console.log('I am ringing 2nd time.');
});

//Fire the event
emitterObj.emit('doorOpen');