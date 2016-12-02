# webpackStart
###1、webpackTest:对加载的文件省略后缀的处理（import或者require）
```javascript
//require("./components/List")或者import React from "./components/List"
var path = require('path');
module.exports = {
  entry:{
    index:'./index.js'
  },
  output:{
    path: path.join(__dirname, "dist"),
        filename: "bundle.js"
  },
  resolve: {
      extensions: ['', '.coffee', '.js'] //可以省略这些后缀文件
    }
}
```

###2、webpackSelf:输出多个捆绑文件 
```
#输出a.js和b.js
output:{a:"path",b:"path"}
```
真是代码
```javascript
//filename: "[name].js" 将按照name生成 main.js和admin.js
var path = require("path");
module.exports = {
    entry: {
    	main:'./src/main.js',
    	admin:'./src/admin.js'
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },
  	module: {
	  	loaders: [
	    	{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
	  	]
	}
};
```

###2、webpackHotReload:热加载（修改代码就会刷新浏览器）
