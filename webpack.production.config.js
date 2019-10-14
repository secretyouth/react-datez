const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    entry: {
        app: ['./app/react-datez.js']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/react-datez.js',
        publicPath: '/',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            include: [
                path.join(__dirname, 'app'),

            ],
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [

                        '@babel/preset-env',
                        '@babel/preset-react',

                    ]
                }
            }
        },
        {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/react-datez.css',
        }),
        new CopyWebpackPlugin([
            { from: './app/favicon.ico' },
            { from: './app/assets', to: 'assets' }
        ])
    ],

}