function Spy(target, method) {
	this.count+=1;
	return Function.prototype.call(target[method]);
}

module.exports = Spy