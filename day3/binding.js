//default binding
var x = 50;
function defaultBinding() {
  console.log(this.x);
}
defaultBinding.x = 10;
//this will print 20 in browser but undefined when using node binding.js
// because in browser window is global context
defaultBinding();
//implicit binding
const obj = {
  x: 10,
  implicitBinding: function () {
    console.log(this.x);
  },
};
obj.implicitBinding();
//explicit binding
const object = {
  x: "hello",
};
function explicitBinding(name) {
  console.log(this.x + " " + name);
}
explicitBinding.call(object, "hawas");
explicitBinding.apply(object, ["hawas"]);
const bind = explicitBinding.bind(object, "hawas");
bind();
//new binding
function newBinding(name, age) {
  this.name = name;
  this.age = age;
}
const newObject = new newBinding("hawas", 18);
console.log("new binding:" + newObject.name + " " + newObject.age);
//showing this loss
class Test {
  print() {
    console.log(this);
  }
}
let test = new Test();
let print = test.print;
print();
//solved using bind
class Test2 {
  x = 20;
  print() {
    console.log(this.x);
  }
}
let test2 = new Test2();
let print2 = test2.print.bind(test2);
print2();
//using arrow on constructor
class Test3 {
  x = 20;
  constructor() {
    this.print = () => console.log(this.x);
  }
}
let test3 = new Test3();
let print3 = test3.print;
print3();
//field
class Test4 {
  x = 20;
  print = () => {
    console.log(this.x);
  };
}
let test4 = new Test4();
let print4 = test4.print;
print4();

function bindAll(object1) {
  let methods = Object.getOwnPropertyNames(
    Object.getPrototypeOf(object1),
  ).filter(function (p) {
    return typeof object1[p] === "function";
  });
  methods.forEach((method) => {
    if (method !== "constructor") {
      object1[method] = object1[method].bind(object1);
    }
  });
}
bindAll(test);
let print10 = test.print;
print10();
//issue when set timeout is there (this points to global so shows undefined)
class Test5 {
  x = 30;
  print = () => {
    setTimeout(function () {
      console.log(this.x);
    }, 3000);
  };
}
let test5 = new Test5();
test5.print();
//solved using arrow function
class Test6 {
  x = 30;
  print = () => {
    setTimeout(() => {
      console.log(this.x);
    }, 3000);
  };
}
let test6 = new Test6();
test6.print();
