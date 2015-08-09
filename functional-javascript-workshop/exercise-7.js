function reduced (arr, fn, init){
	arr.forEach(function(e, i, arr){
		fn(init, arr[i], i);
	})
	return init;
}

module.exports = reduced;