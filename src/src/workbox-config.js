module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,ttf,css,html,js}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: './sw.js'
};