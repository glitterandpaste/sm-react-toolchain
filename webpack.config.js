const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const InterpolateHtmlPlugin = require("interpolate-html-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPluginWithRTL = require("@automattic/mini-css-extract-plugin-with-rtl");

const path = require("path");

module.exports = ({ production }) => ({
	mode: production ? "production" : "development",
	target: "web",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: `[name].js`,
		chunkFilename: "[name].js",
		publicPath: "/",
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules\/(?!(cypress-react-unit-test)\/).*/,
				use: [
					{
						loader: "babel-loader",
						options: {
							cacheDirectory: true,
							babelrc: false,
							presets: [
								["@babel/preset-env", { useBuiltIns: "entry", corejs: 3 }],
								"@babel/preset-react",
								"@babel/preset-typescript",
							],
							plugins: ["react-hot-loader/babel", "babel-plugin-transform-class-properties", "lodash"],
						},
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				include: path.resolve(__dirname, "src"),
				use: [
					{
						loader: "file-loader",
					},
				],
			},
			{
				test: /\.scss$/,
				include: path.resolve(__dirname, "src"),
				use: [
					production
						? {
								loader: MiniCssExtractPluginWithRTL.loader,
								options: {
									esModule: true,
								},
						  }
						: "style-loader",
					"css-modules-typescript-loader",
					{
						loader: "css-loader",
						options: {
							modules: {
								localIdentName: production ? "[hash:base64]" : "[local]__[hash:5]",
							},
						},
					},
					"sass-loader",
				],
			},

			{
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
		],
	},
	resolve: {
		alias: {
			"react-dom": "@hot-loader/react-dom"
		},
		extensions: [".tsx", ".ts", ".js", ".scss", ".css"],
		plugins: [
			new TsconfigPathsPlugin({ configFile: "./tsconfig.json" }),
		],
	},
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
			title: "SM React Toolchain",
        }),
		new InterpolateHtmlPlugin({
			PUBLIC_URL: production ? "" : "http://localhost:3000",
		}),
		new ForkTsCheckerWebpackPlugin({
			eslint: {
				enabled: true,
				files: "src/**/*.{ts,tsx}",
			},
			formatter: {
				type: "codeframe",
			},
			typescript: {
				mode: "write-references",
			},
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: "./public/ico",
					to: "ico",
				},
			],
		}),
    ],
	devServer: {
		compress: true,
		port: 8080,
		open: false,
		quiet: true,
		hot: true,
		historyApiFallback: true,
		contentBase: path.resolve(__dirname, "dist"),
	},
});