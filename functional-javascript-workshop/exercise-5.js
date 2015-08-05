function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
		return submittedUsers.every(function(itemSubmitted){
			return goodUsers.some(function(itemGood){
				return itemGood.id == itemSubmitted.id;
			});
		});
	};
}

module.exports = checkUsersValid;