const path = require("path");
const CopyWebpackPlugin = require('copy-webpack-plugin')


const PROD = process.env.NODE_ENV === "production";
const webpackMode = PROD ? "production" : "development";

const config = {
    mode: "production",
    entry: {
        index: ["./src/index"],
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
        libraryTarget: "commonjs2",
    },
    module: {
        rules: [
            { test: /\.(tsx?)$/, use: "babel-loader", include: [path.join(__dirname, "src")] },
            {
                test: /\.less$/,
                use: [
                    { loader: "style-loader", options: { injectType: "lazyStyleTag" } },
                    { loader: "css-loader", options: {modules: {localIdentName: "rsl-[hash:base64:3]"}}},
                    "less-loader",
                ], include: [path.join(__dirname, "src")]
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    externals: {
        react: "react",
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                from: "./src/index.d.ts",
                to: "index.d.ts",
            }]
        }),
    ],
};

module.exports = config;
