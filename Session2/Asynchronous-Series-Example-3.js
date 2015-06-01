/*
* Control flow pattern #2: Full parallel - an asynchronous, parallel for loop

* In other cases, we just want to take a small set of operations, launch them 
* all in parallel and then do something when all of them are complete.
*/

function async(arg, callback) {
	console.log('do something with \''+arg+'\', return 1 sec later');
	setTimeout(function () {
		callback(arg * 2);
	}, 1000);
}

function final() {
	console.log('Done', results);
}

var items = [1,2, 3, 4, 5, 6];
var results = [];

items.forEach(function (item) {
	console.log('---------- ' + item);
	async(item, function (result) {
		results.push(result);
		if (results.length == items.length) {
			final();
		}
	});
});

/*
* We take every item in the items array and start async operations for each of the 
* items immediately. The async() function is passed a function that stores the result
* and then checks whether the number of results is equal to the number of items to process. 
* If it is, then we call the final() function.

* Conclusion: parallel, full-concurrency, no-concurrency-control
*/