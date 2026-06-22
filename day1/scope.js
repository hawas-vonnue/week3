if (true) {
  let a = 10;
}
// console.log(a)
if (true) {
  var b = 10;
}
console.log(b);
// second one
//error - ReferenceError: Cannot access 'c' before initialization
// console.log(c);
let c = 15;
console.log(d);
var d = 20;
// third one
for (let e = 1; e < 10; e++) {
  console.log(e);
}
// console.log(e)
for (var f = 1; f < 10; f++) {
  console.log(f);
}
console.log(f);
// fourth one
let ab = 20;
ab = 30;
console.log(ab);
var cd = 30;
cd = 40;
console.log(cd);
const ef = 35;
// ef = 40
console.log(ef);
//fifth one (re declare)
var ac = 10;
var ac = 20;
console.log(ac);
let dc = 20;
// let dc = 30;
console.log(dc);
// three levels of nested functions
for (let i = 0; i < 5; i++) {
  let first = 5;
  for (let j = 0; j < 5; j++) {
    let second = 10;
    for (let k = 0; k < 5; k++) {
      console.log("first:" + first);
      console.log("second:" + second);
    }
  }
}
//var-in-loop closure bug
console.log("var-in-loop closure bug");
for (var l = 0; l < 4; l++) {
  setTimeout(() => {
    console.log(l);
  }, 1000);
}
console.log("bug solved with let");
for (let m = 0; m < 4; m++) {
  setTimeout(() => {
    console.log(m);
  }, 1000);
}
