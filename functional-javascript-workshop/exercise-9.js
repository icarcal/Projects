function logger(namespace){
	//var slice = Array.prototype.slice.call(arguments)
	return Function.apply( null , new Array(namespace) );
}

module.exports = logger;