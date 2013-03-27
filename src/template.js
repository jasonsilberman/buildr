App.template = function () {
	console.log('app.template');
};

App.template.prototype.render = function (route) {
	document.body.innerHTML = route.path;
};
