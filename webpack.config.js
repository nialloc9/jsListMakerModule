var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : false,
    entry: "./src/js/script.js",
    output: {
        path: __dirname + "/src/js",
        filename: "toList.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ],

    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};