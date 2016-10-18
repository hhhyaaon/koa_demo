var webpack = require("webpack");
var HtmlWebpackPlugin = require("webpack-html-plugin");
var path = require("path");

var c = require("./c.js");

var root = path.join(__dirname, "../");
var src = path.join(root, "./src");
var dist = path.join(root, "./dist");


var entry = {};
c.entry.map(function (name) {
    entry[name] = path.join(src, "./" + name + ".js");
})


module.exports = {
    entry: entry,
    output: {
        path: dist,
        filename: "/static/[name].js",
        publicPath: "/dist/"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel"
            }
        ]
    },
    resolve: {
        extensions: ['', '.js']
    },
    plugins: [
        //new HtmlWebpackPlugin()
    ]
        .concat(getHtmlChunk())
};


function getHtmlChunk() {
    return c.entry.map(function (name) {
        return new HtmlWebpackPlugin({
            title: name,
            template: path.join(src, "./tmp.html"),
            //filename: path.join(dist, "./" + name + "/index.html"),
            inject: true,
            chunks: [name]
        })
    });
}
