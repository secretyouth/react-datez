const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: ['babel-polyfill', './app/index.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:9001/'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['react', 'es2015']
            }
        }, {
            test: /\.css$/,
            loader: ['style-loader', 'css-loader?importLoaders=1', 'postcss-loader']
        }, {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            loader: 'file-loader?limit=8192&name=assets/[name].[ext]?[hash]'
        }, {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.ejs'
        }),
        new CopyWebpackPlugin([
            { from: './app/favicon.ico' },
            { from: './app/assets', to: 'assets' }
        ])
    ],
    devtool: 'eval'
}
