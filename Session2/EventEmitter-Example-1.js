//Import 'events' module
var events = require('events');

//EventEmitter Object
var eventEmitter = new events.EventEmitter();

//Define the callback function
var ringBell = function ringBell() {
	console.log('I am ringing');
};

//Associate callabck function with 'doorOpen' event
eventEmitter.on('doorOpen', ringBell);

//Fire the event
eventEmitter.emit('doorOpen');