var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        css: './resources/assets/css',
    },
    output: {
        path: './public/assets',
        filename: '[name].js',
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin('app.css'),
    ],
};
