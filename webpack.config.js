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
            { test: /\.(tsx?|jsx?)$/, use: "babel-loader", exclude: [/node_modules/] },
            {
                  test: /\.less$/,
                  use: [
                      "classnames-loader",
                      "style-loader",
                      { loader: "css-loader", options: { modules: true, localIdentName: "rsl-[hash:base64:3]" } },
                      "less-loader",
                  ],
                  exclude: ["node_modules"],
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
        new CopyWebpackPlugin([{
            from: "./src/index.d.ts",
            to: "index.d.ts",
        }]),
    ],
};

module.exports = config;
