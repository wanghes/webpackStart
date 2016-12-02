document.write("It works!");

class People{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  setName(name){
    this.name = name;
  }
  getName(){
    return this.name;
  }
}

class Chairman extends People{
  constructor(name,age,content){
    super(name,age);
    this.content = content;
  }
  getContent(content){
    return this.content;
  }
  echoStr(){
  	console.log(this.name+':'+this.content);
  }
  static isRed(color) {
    return "this is a red "+color;
  }
}

var leader = new Chairman('江泽民',50,"你好！");
leader.echoStr();
leader.setName('习主席');
leader.echoStr();
console.log(Chairman.isRed('yellow'));


//import ok from './ok';
import * as math from "./theme";
console.log(math.add(3,2));


console.log('<---------------------------------------------------->');
var s = new Set();
s.add('hello').add('world').add({a:1});
console.log(s.size);
console.log(s);
console.log(s.has('hello'));

//throw new TypeError('怎么会');
console.log('-----------------------------------------------------------');
// Maps
var m = new Map();
m.set("hello", {name:'wang_hes'});
m.set(s, 34);
m.get(s) == 34;
console.log(m);
console.log(m.get(s) == 34);
console.log(m.get('hello'));


console.log('------------------------------------');
let arr = ["a", "b", "c"].keys();

console.log(arr);

