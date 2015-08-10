function duckCount() {
	var args = Array.prototype.slice.call(arguments);
	return args.filter(function(e){
		console.log(Object.hasOwnProperty.call(e, 'quack'));
		return Object.hasOwnProperty.call(e, 'quack');
	}).length;
}

module.exports = duckCount