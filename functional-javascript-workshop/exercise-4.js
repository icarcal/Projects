function getShortMessage(array){
	var returnArray = array.filter(function(element){
		return element.message.length <= 50
	});

	return returnArray.map(function(element){
		return element.message;
	});
}

module.exports = getShortMessage;