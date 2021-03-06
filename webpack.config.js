const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_moodules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
