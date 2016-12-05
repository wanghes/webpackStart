var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: [
        path.resolve(__dirname, "js/entry.js")
    ],
    output: {
        path: path.resolve(__dirname, './build/js'),
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.jsx?$/, // 用正则来匹配文件路径，这段意思是匹配 js 或者 jsx
            loader: 'babel' // 加载模块 "babel" 是 "babel-loader" 的缩写
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },
    devtool: 'eval-source-map',
    devServer: {
        inline: true,
        hot: true,
        color: true,
        progress: true,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
          template:path.resolve('template','index.tpl.html'),
          inject: 'body',//允许插件修改的内容为body,
          minify:{    //压缩HTML文件
                removeComments:true,    //移除HTML中的注释
                collapseWhitespace:true    //删除空白符与换行符
           }
        })
    ]
};
