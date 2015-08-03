var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'application/json'})

	var urlParsed = url.parse(req.url,true);
	var date = new Date(urlParsed.query.iso);

	if(urlParsed.pathname == '/api/parsetime'){
		res.end(JSON.stringify({'hour':date.getHours(),'minute':date.getMinutes(),'second':date.getSeconds()}));
	} else if (urlParsed.pathname == '/api/unixtime'){
		res.end(JSON.stringify({'unixtime':date.getTime()}));
	}
});
server.listen(process.argv[2]);