/**
 * Created by henry on 16/3/24.
 */
/**
 * Created by henry on 16/3/21.
 */
var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: ['./src/js/app.js'],
    /*plugins:[
     //去掉空格
     new webpack.optimize.UglifyJsPlugin()
     ],*/
    output: {
        path: path.join(__dirname,'assets'),
        publicPath: '/assets/',//bundle.js的输出路径
        filename: 'bundle.js'
    },
    module:{
        loaders:[{
            test: /images/,
            exclude: /node_modules/,
            loader: 'file'
        },{
            test: /\.js$/,
            exclude: /node_modules/,
            include: __dirname,
            loader: 'babel'
        },{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /icons/,
            exclude: /node_modules/,
            loader: 'url'
        },{
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: 'style!css!sass'
        },{
            test: /\.tpl$/,
            exclude: /node_modules/,
            loader: 'html-loader'
        },{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    }
}