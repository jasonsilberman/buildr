var fs = require('fs'), uglify = require('uglify-js');

var FILE_ENCODING = 'utf-8',
	PROJECT_NAME = 'app',
	LICENSE = '../LICENSE.md',
	INPUT_DIR = '../src',
	OUTPUT_DIR = '../dist',
	FILE_EXT = '.js',
	SCRIPTS = [
		'core.js',
		'routes.js',
		'router.js',
		'template.js',
		'about.js',
		'users.js',

		'run.js'
	];

function path() {
	return [].join.call(arguments, '/');
}

function build() {
	var join, license, un, min;

	license = fs.readFileSync(LICENSE, FILE_ENCODING);

	join = SCRIPTS.map(function (name) {
		return fs.readFileSync(path(INPUT_DIR, name), FILE_ENCODING);
	});

	un = license + '\n' + join;

	min = license + uglify.minify(join, {fromString: true}).code;

	fs.writeFileSync(path(OUTPUT_DIR, PROJECT_NAME + FILE_EXT), un, FILE_ENCODING);

	fs.writeFileSync(path(OUTPUT_DIR, PROJECT_NAME + '.min' + FILE_EXT), min, FILE_ENCODING);

	console.log('Build Complete!');
}

build();