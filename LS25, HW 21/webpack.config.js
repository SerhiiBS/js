const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: [
            path.join(__dirname, "./src/index.js"),
            path.join(__dirname, "./src/index.scss"),
        ]
    },
    devtool: "source-map",
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    miniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({ template: './src/index.html' }),
        new miniCssExtractPlugin()
    ],
    mode: "development"
}