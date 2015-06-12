//Import 'events' module
var events = require('events');

//EventEmitter Class reference
var eventEmitter = require('events').EventEmitter;

//Create EventEmitter Object
var emitterObj = new eventEmitter();

//Define the callback function
var ringBell = function ringBell() {
	console.log('I am ringing only once');
};

/*
* It's just like the on method, except that it only works once. 
* After being called for the first time, the listener is removed.
*/
emitterObj.once('doorOpen', ringBell);

//Fire the event
emitterObj.emit('doorOpen');

//Fire the event again
emitterObj.emit('doorOpen');