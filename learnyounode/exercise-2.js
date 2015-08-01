var result = process.argv.reduce( function(prev,cur) {
	prev = isNaN(prev) ? 0 : Number(prev);
	cur = isNaN(cur) ? 0 : Number(cur);
	return prev + cur;
});

console.log( result );