function Spy(target, method) {
	var ret = { count: 0 };
	var originalMethod = target[method];

	target[method] = function (){
		var returnOriginal = originalMethod.apply(this, arguments);
		ret.count++;
		return returnOriginal;
	}

	return ret;
}

module.exports = Spy;