/*
* new Buffer(size)#
* size Number
* Allocates a new buffer of size octets.

* buf.write(string[, offset][, length][, encoding])#
* string String - data to be written to buffer
* offset Number, Optional, Default: 0
* length Number, Optional, Default: buffer.length - offset
* encoding String, Optional, Default: 'utf8'

* Writes string to the buffer at offset using the given encoding. offset defaults to 0, 
* encoding defaults to 'utf8'. length is the number of bytes to write. Returns number of octets 
* written. If buffer did not contain enough space to fit the entire string, it will write a partial 
* amount of the string. length defaults to buffer.length - offset. The method will not write 
* partial characters.

* buf.length#
* Number
* The size of the buffer in bytes. Note that this is not necessarily the size of the contents. 
* length refers to the amount of memory allocated for the buffer object. It does not change when
* the contents of the buffer are changed.
*/

buf = new Buffer(1234);
console.log(buf.length);
buf.write("let's write something", 0, "ascii");
console.log(buf.length);
