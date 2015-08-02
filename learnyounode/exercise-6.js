var finder = require('./exercise-6-module');

finder(process.argv[2], process.argv[3], function(err, data){
	if(err){
		throw err;
	}

	data.forEach(function(e, i, a){
		console.log(e);
	});
});