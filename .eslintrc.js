module.exports = {
	root: true,
	env: {
		node: true,
		browser: true
	},
	parserOptions: {
		parser: "babel-eslint"
	},
	extends: [
		"plugin:vue/recommended",
		"plugin:nuxt/recommended",
	],
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-undef": 0,
		indent: ["error", "tab", { SwitchCase: 1 }],
		quotes: ["error", "single"],
		semi: ["error", "never"],
		"vue/html-indent": ["error", "tab"],
		"vue/max-attributes-per-line": ["error", {
			singleline: 2,
			multiline: {
				max: 2,
				allowFirstLine: false
			}
		}],
		"vue/html-closing-bracket-newline": ["error", {
			"singleline": "never",
			"multiline": "never"
		}],
		"vue/multiline-html-element-content-newline": ["error", {
			"ignoreWhenEmpty": true,
			"allowEmptyLines": false,
		}],
		"vue/singleline-html-element-content-newline": ["error", {
			"ignoreWhenNoAttributes": false,
			"ignoreWhenEmpty": true,
		}],
		"vue/html-self-closing": ["error", {
			html: {
				void: "always",
			}
		}],
		"vue/component-definition-name-casing": ["error", "kebab-case"],
		"vue/name-property-casing": ["error", "kebab-case"],
		"vue/component-name-in-template-casing": ["error", "kebab-case"]
	},
	globals: {
		$nuxt: true
	}
}
