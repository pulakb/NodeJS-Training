var UserList = require('./userlist');
var users = new UserList();

users.on('saved-user', function (user) {
	console.log("saved: " + user.name + " (" + user.id + ")");	
});

users.save({ name: 'Ram', occupation: 'manager'});
users.save({ name: 'Shyam', occupation: 'TL'});