/**
 * A simple node.js build script
 * @author Jason Silberman - http://bawz.is
 */

var App = {};
,App.routes = [
	{
		path : 'about'
	},
	{
		path : 'users/(:any)',
		controller : 'users/search/%1'
	}
];
,App.router = function () {
	return App.routes[0];
};
,App.template = function () {
	console.log('app.template');
};

App.template.prototype.render = function (route) {
	document.body.innerHTML = route.path;
};
,App.controllers.about = function () {
	alert('This is the about page!!');
};
,App.controllers.users = function () {
	alert('users something page');
};

App.controllers.users.prototype.search = function (username) {
	alert('searching for user...@' + username);
};
,App.run = function () {
	var template = new App.template();
	template.render(App.router());
};
