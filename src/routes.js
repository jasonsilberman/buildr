App.routes = [
	{
		path : 'about'
	},
	{
		path : 'users/(:any)',
		controller : 'users/search/%1'
	}
];
