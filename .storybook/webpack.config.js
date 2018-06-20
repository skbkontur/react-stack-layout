const path = require("path");

module.exports = (storybookBaseConfig) => {
    storybookBaseConfig.module.rules = [];
    storybookBaseConfig.module.rules.push(
        {test: /\.tsx?$/, use: "babel-loader", exclude: [/node_modules/]},
        {
            test: /\.less$/,
            use: [
                "classnames-loader",
                "style-loader",
                {loader: "css-loader", options: {modules: true}},
                "less-loader",
            ],
            exclude: ["node_modules"],
        },
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
            include: [/react-ui/],
        },
        {
            test: /\.(png|woff|tff|woff2|eot)$/,
            use: ["url-loader"],
            include: [/react-ui/],
        },
    );
    storybookBaseConfig.resolve.extensions = [".tsx", ".ts", ".js", ".jsx"];
    return storybookBaseConfig;
};
