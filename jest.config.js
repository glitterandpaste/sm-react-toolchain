module.exports = {
	rootDir: "src",
	preset: "ts-jest",
	moduleNameMapper: {
		["\\.(css|less|scss|sass)$"]: "identity-obj-proxy",
	},
	moduleDirectories: ["src", "node_modules"],
	coverageReporters: ["cobertura", "html", "text-summary"],
	coverageDirectory: "tests",
	collectCoverageFrom: ["**/*.{ts,tsx}"],
	setupFilesAfterEnv: ["<rootDir>/utils/test-setup.ts"],
	reporters: [
		"default",
		[
			"jest-junit",
			{
				suiteName: "Unit Tests",
				outputDirectory: "tests",
				outputName: "unit.xml",
			},
		],
	],
};