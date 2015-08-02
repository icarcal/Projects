var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, data){
	if(err){
		throw err;
	} else {
		filter = data.filter(function(item){
			return path.extname(item) === '.'+process.argv[3];
		});

		filter.forEach(function(e, i, a){
			console.log(e);
		});
	}
});