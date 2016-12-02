var path = require('path');
module.exports = {
    entry: [
        path.resolve(__dirname, "js/entry.js")
    ],
    output: {
        path: path.resolve(__dirname, './js/'),
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
        extensions: ['', '.js', '.jsx','.css']
    },
    devtool: 'eval-source-map',
    devServer: {
      inline: true,
      hot:true,
      color:true,
      progress:true,
      historyApiFallback:true
   }
};
