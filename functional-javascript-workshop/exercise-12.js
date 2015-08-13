function Spy(target, method) {
	console.log(target);
	console.log(method);
}

module.exports = Spy