var fs = require('fs');
var path = require('path');

var func = function (dir, fileExt, callback){
	fs.readdir(dir, function(err, data){
		if(err)
			return callback(err);

		filter = data.filter(function(item){
			return path.extname(item) === '.' + fileExt;
		});

		return callback(null, filter);		
	});
}

module.exports = func;