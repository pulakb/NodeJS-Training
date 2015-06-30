/*
* Control flow pattern #1: Series - an asynchronous for loop

* Sometimes we just want to do one thing at a time. For example, we need to do five 
* database queries, and each of those queries needs data from the previous query, 
* so we have to run one after another.
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

function series (item) {
	if (item) {
		async (item, function (result) {
			results.push (result);
			return series(items.shift());
		});
	} else {
		return final();
	}
}
/*
* The shift() method removes the first element from an array and returns that element.
* This method changes the length of the array.
* */
series(items.shift());

/*
* Basically, we take a set of items and call the series control flow function with the 
* first item. The series launches one async() operation, and passes a callback to it. 
* The callback pushes the result into the results array and then calls series with the 
* next item in the items array. When the items array is empty, we call the final() function.

* This results in serial execution of the asynchronous function calls. Control is passed back 
* to the Node event loop after each async I/O operation is completed, then returned back when 
* the operation is completed.

* Characteristics:

  1. Runs a number of operations sequentially
  2. Only starts one async operation at a time (no concurrency)
  3. Ensures that the async function complete in order

* Conclusion: sequential, no-concurrency
*/