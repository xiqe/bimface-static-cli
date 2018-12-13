const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/index.js')
    ],

    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/bundle.js'
    },

    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader?cacheDirectory=true',
            exclude: /node_modules/
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader']
            })
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'less-loader']
            })
        },{
            test: /\.(png|jpe?g|gif)(\?.*)?$/,
            loader: 'url-loader?limit=10000&name=img/[name]_[hash:4].[ext]'
        }, {
            test: /\.(woff|eot|ttf|otf|svg)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 10*1024,
                name: 'images/fonts/[name].[hash:4].[ext]'
            }
        }]
    },

    devServer: {
        port: 8080,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0'
    },

    resolve: {
        alias: {
            router: path.join(__dirname, 'src/router')
        }
    }
};
