function loadUsers(userIds, load, done) {
	var arrayObj = [];
	userIds.forEach(function(element, index, array){
		load(element, function(userobject){
		 	arrayObj.push(userobject);
		 	if(index == array.length-1){
		 		return done(arrayObj);
		 	}
		});
	});
}

module.exports = loadUsers