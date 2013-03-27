App.controllers.users = function () {
	alert('users something page');
};

App.controllers.users.prototype.search = function (username) {
	alert('searching for user...@' + username);
};
