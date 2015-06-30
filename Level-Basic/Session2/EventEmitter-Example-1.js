//Import 'events' module

/*
*  The builtin require function is the easiest way to include modules that exist in separate files.
*  The basic functionality of require is that it reads a javascript file, executes the file, and
*  then proceeds to return the exports object.
*
* */
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