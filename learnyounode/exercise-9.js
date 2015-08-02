var http = require('http');
var cs = require('concat-stream');
var r = [];
var count = 0;

function responseController(url, index){
	http.get(url, function(response){
		response.setEncoding('utf8');
		response.pipe(
			cs(function(data){
				r[index] = data;
				count++;

				if(count === 3){
					r.forEach(function(e){
						console.log(e);
					});
				}
			})
		);
	});
}

args = process.argv.splice(2);
args.forEach(function(e, i, a){
	responseController(e, i);
});