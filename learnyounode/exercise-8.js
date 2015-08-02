var http = require('http');
var bl = require('bl');
var cs = require('concat-stream');

http.get(process.argv[2], function(response){
	response.setEncoding('utf8');
	response.pipe(
		cs(function(data){
			console.log(data.length);
			console.log(data);
		})
	);
});