# webpackStart
###webpackTest:对加载的文件省略后缀的处理（import或者require）
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
