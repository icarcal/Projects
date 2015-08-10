function logger(namespace){
	return Function.prototype.apply(console.log, 'LOG:');
}

module.exports = logger;