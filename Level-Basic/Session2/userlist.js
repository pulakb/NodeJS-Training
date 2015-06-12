//Import 'util' module to help with the inheriting
var util = require('util');

//EventEmitter Class reference
var EventEmitter = require('events').EventEmitter;

var id = 1;
var database = {
    users: [
        { id: id++, name: "Joe Smith",  occupation: "developer"    },
        { id: id++, name: "Jane Doe",   occupation: "data analyst" },
        { id: id++, name: "John Henry", occupation: "designer"     }
    ]
};

/*
* What we're doing here is using the call method on the EventEmitter 
* constructor to run that method on the new UserList object (which is this). 
* If we need to do any other initialization to our object, we could do it 
* inside this function, but that's all we'll do for now.
*/

function UserList () {
	EventEmitter.call(this);
}

/*
* Inheriting the constructor isn't enough though; we also need to 
* inherit the prototype. This is where the util module comes in. 
* This will add everything that's on EventEmitter.prototype to 
* UserList.prototype; now, our UserList instances will have all the 
* methods of an EventEmitter instance.
*/

util.inherits(UserList, EventEmitter);

/*
* This method takes an object to save to our "database": it adds an 
* id and pushes it into the users array. Then, it emits the "saved-user" event, 
* and passes the object as data. If this were a real database, saving it would 
* probably be an asynchronous task, meaning that to work with the saved record 
* we would need to accept a callback. The alternative to this is to emit an event,
* as we're doing. Now, if we want to do something with the saved record, we can 
* just listen for the event. 
*/

UserList.prototype.save = function (obj) {
    obj.id = id++;
    database.users.push(obj);
    this.emit("saved-user", obj);  
};

UserList.prototype.all = function () {
	return database.users;
};

module.exports = UserList;