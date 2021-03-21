module.exports = {
	env: {
		browser: true,
		node: true,

		// Adds all ECMAScript globals and automatically
		// and sets ecmaVersion parser option
		es2021: true,
	},
	extends: [
		// Generally recommended ESLint rules for all projects
		"eslint:recommended",

		// TypeScript specific recommended rules
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",

		// React specific recommended rules
		"plugin:react/recommended",

		// Recommended accessibility rules (a11y)
		"plugin:jsx-a11y/recommended",

		// Prettier config to disable styling and formatting related rules.
		// Those are handled by Prettier
		"prettier",
	],
	plugins: ["react", "react-hooks", "@typescript-eslint", "jsx-a11y"],

	// The parser to convert TypeScript to an Abstract Syntax Tree
	// which eslint can process.
	parser: "@typescript-eslint/parser",
	parserOptions: {
		sourceType: "module",
		project: "./tsconfig.json",
	},

	// Override rules here
	rules: {
		// While useful for debugging, it's not good practice
		// to leave console logs in the production output.
		"no-console": [
			"warn",
			{
				allow: ["warn", "error"],
			},
		],

		// Enforce specifying a return type for functions,
		// but allow implicit for expressions
		"@typescript-eslint/explicit-function-return-type": [
			"warn",
			{
				allowExpressions: true,
			},
		],

		// Disabling rule as prop type can be inferred from the
		// type parameter provided in TypeScript
		"react/prop-types": "off",

		// Hook specific rules
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",

		// These floating promises seem to be commonly used and accepted in React projects.
		"@typescript-eslint/no-floating-promises": "off",

		// Not really an issue with most React projects
		"@typescript-eslint/unbound-method": "off",

		// Disabling rules which add complication when handling 3rd party "any" types
		"@typescript-eslint/no-unsafe-assignment": "off",
		"@typescript-eslint/no-unsafe-member-access": "off",
		"@typescript-eslint/no-unsafe-call": "off",

		// Allow use of promises where void return is expected (e.g. setTimeout(asyncFunction, 100))
		"@typescript-eslint/no-misused-promises": [
			"error",
			{
				checksVoidReturn: false,
			},
		],
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
