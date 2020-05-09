module.exports = function (plop) {
	plop.setGenerator('sketch', {
		description: 'Create New Sketch',
		prompts: [
			{
				type: 'list',
				name: 'type',
				message: 'Sketch Type',
				choices: [
				  	{
						name: 'Standard',
						value: 'standard'
				  	},
				  	{
						name: 'Three',
						value: 'three'
				  	},
				  	{
						name: 'Shader',
						value: 'shader'
				  	},
				  	{
						name: 'Penplot',
						value: 'penplot'
				  	}
				]
			},
			{
				type: 'input',
				name: 'folder',
				message: 'Sketch Folder'
			},
			{
				type: 'input',
				name: 'name',
				message: 'Sketch Name'
			}
		],
		actions: [
			{
				type: 'add',
				path: 'src/{{ pathCase folder }}/{{ dashCase name }}/index.js',
				templateFile: 'plop-templates/{{ type }}.js',
				abortOnFail: true
			}
		]
	})
}
