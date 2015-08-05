var http = require('http');
var url = require('url');

var getResponse = function (urlIn){
	var urlParsed = url.parse(urlIn,true);
	var date = new Date(urlParsed.query.iso);

	var routes = {
		'/api/parsetime' : JSON.stringify({'hour':date.getHours(),'minute':date.getMinutes(),'second':date.getSeconds()}),
		'/api/unixtime' : JSON.stringify({'unixtime':date.getTime()})
	};

	return routes[urlParsed.pathname];
}


var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'application/json'})

	res.end( getResponse(req.url) );
});
server.listen(process.argv[2]);