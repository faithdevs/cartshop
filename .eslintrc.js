module.exports = {
	env: {
		node: true,
		commonjs: true,
		browser: true,
		es6: true
	},
	parser: "vue-eslint-parser",
	plugins: ["vue"],
	parserOptions: {
		parser: "babel-eslint"
	},
	extends: [
		"eslint:recommended",
		"plugin:vue/essential",
		"plugin:prettier/recommended"
	],
	rules: {
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"prettier/prettier": "error"
	}
};
