function add( val, obj ){
	( obj[val] ) ? obj[val] += 1 : obj[val] = 1;
}

function countWords(inputWords) {
	var obj = {};
	inputWords.reduce(function(prev, next, i, array){
		if(i == 1){
			add(prev, obj);
		}

		(prev == next) ? add(prev, obj) : add(next, obj);
	});

	return obj;
}

module.exports = countWords