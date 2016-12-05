var echo = require('./modules/echo.js');
var test = require('./modules/test.js');
import React from 'react';
import {render} from 'react-dom';
import Hello from './modules/hello.jsx';

module.exports = function(){
  echo.echo("test1");
  echo.echo1();
  console.log(test.echo(15));
  echo.echo2();
  const Component = "abc";
  main();

  function main() {
      render(<div><Hello /><Component href="http://www.baidu.com/">OKMAN</Component></div>, document.getElementById('mount'));
  }

}
