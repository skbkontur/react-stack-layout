import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import webpack from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const analyze = false;
const PROD: boolean = process.env.NODE_ENV === "production";
const webpackMode = PROD ? "production" : "development";

const config: webpack.Configuration = {
    mode: webpackMode,
    entry: {
        main: ["@babel/polyfill", "./src/index"],
    },
    output: {
        path: path.resolve(path.join(__dirname, "..", "..", "react-stack-layout-docs")),
        publicPath: PROD ? "/react-stack-layout/" : "/",
        filename: PROD ? "[name].[chunkhash].js" : "[name].js",
    },
    module: {
        rules: [
            { test: /\.(tsx?|jsx?)$/, use: "babel-loader", exclude: [/node_modules/] },
            PROD
                ? {
                      test: /\.less$/,
                      use: [
                          "classnames-loader",
                          MiniCssExtractPlugin.loader,
                          { loader: "css-loader", options: { modules: true } },
                          "less-loader",
                      ],
                      exclude: ["node_modules"],
                  }
                : {
                      test: /\.less$/,
                      use: [
                          "classnames-loader",
                          "style-loader",
                          { loader: "css-loader", options: { modules: true } },
                          "postcss-loader",
                          "less-loader",
                      ],
                      exclude: [/node_modules/],
                  },
            {
                test: /\.(png|woff|tff|woff2|eot|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 32768,
                        },
                    },
                ],
                exclude: [/node_modules/],
            },
            {
                test: /\.css$/,
                use: [PROD ? MiniCssExtractPlugin.loader : "style-loader", "css-loader", "postcss-loader"],
                include: [/react-ui/],
            },
            {
                test: /\.(png|woff|tff|woff2|eot|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 32768,
                        },
                    },
                ],
                include: [/react-ui/],
            },
        ],
    },
    plugins: [
        ...(PROD ? [new MiniCssExtractPlugin({
              filename: "[name].[chunkhash].css",
          })] : []),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
          ...(analyze ? [new BundleAnalyzerPlugin()] : []),
      ],
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"],
        alias: {
            Styles: path.join(__dirname, "src/Styles"),
            Domain: path.join(__dirname, "src/Domain"),
            Commons: path.join(__dirname, "src/Commons"),
        },
    },
};

// tslint:disable:no-default-export
export default config;
