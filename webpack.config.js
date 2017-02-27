var webpack = require("webpack");

module.exports = {
    entry: "./src/voltz.ts",
    output: {
        path: "./dist",
        filename: "voltz.js",
        libraryTarget: "this",
        publicPath: "dist/"
    },
    bail: true,

    devtool: "source-map",

    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                loader: 'tslint'
            },
            {
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ],

        loaders: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ],
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            minimize: true
        })
    ],

    devServer: {
        host: "voltz.local",
        port: "14501"
    },

    tslint: {
        emitErrors: true,
        failOnHint: true
    },

    externals: {},
};