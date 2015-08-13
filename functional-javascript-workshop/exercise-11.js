module.exports = function arrayMap(arr, fn) {
	return arr.reduce(function(prev, next, i, a){
		prev.push( fn.apply( this, [next, i, a] ) )
		return prev;
	},[]);
}