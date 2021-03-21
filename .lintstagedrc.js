module.exports = {
	"*.{css}": "stylelint --fix --syntax=css",
	"*.{scss}": "stylelint --fix --syntax=scss",
	"*.{json,js,tsx,ts,yml,html}": "prettier --write",

	// Exclude auto-generated type definitions
	"!(*.scss.d).{ts,tsx}": "eslint --fix --max-warnings=0",
};
