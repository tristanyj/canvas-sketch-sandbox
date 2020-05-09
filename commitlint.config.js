module.exports = {
	extends: ['@commitlint/config-conventional'],
	parserPreset: 'conventional-changelog-conventionalcommits',
	'type-enum': [
		'build',
		'ci',
		'chore',
		'docs',
		'feat',
		'fix',
		'perf',
		'refactor',
		'revert',
		'style',
		'test'
	],
	'scope-enum': [
		2,
		'always',
		['core', 'config', 'package', 'lang', 'style']
	],
	'scope-empty': [2, 'never']
}
