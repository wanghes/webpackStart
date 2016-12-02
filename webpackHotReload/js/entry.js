require('!style!css!../css/style');
let content = require('./content');
let test = require('./modules/test');
let info = document.getElementById('info');
info.innerHTML = test.echo("hi! wang_hes");
content();

