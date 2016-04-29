module.exports = {
    entry: {
        app: './resources/assets/js/app',
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
                test: /\.html$/,
                loader: 'raw-loader',
            }
        ],
    },
};
