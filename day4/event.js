const promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(3), 3000);
});
promise.then((result) => console.log(result));
const promise2 = new Promise(function (resolve, reject) {
  resolve("first resolve");
  setTimeout(() => resolve("second resolve"), 3000);
});
promise2.then((result) => console.log(result));
const promise3 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("first resolve of promise 3"), 3000);
  resolve("second resolve of promise 3");
});
promise3.then((result) => {
  console.log(result);
});
const promise4 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error("error on promise")), 5000);
});
promise4.catch((error) => console.log("error on promise 4"));
const promise5 = Promise.reject(new Error("promise 5 failed"));
promise5.catch((error) => console.log("error handled"));
console.log("error not catched");
const promise6 = new Promise(function (resolve, reject) {
  resolve("promise 6");
});
promise6.then((result) => console.log("promise 6"));
console.log("this is after promise 6 then");
const promise7 = new Promise(function (resolve, reject) {
  resolve("promise 7");
});
promise7.then((result) => console.log(result));
queueMicrotask(() => {
  console.log("this is after promise 7  then");
});
queueMicrotask(() => {
  console.log("this is before promise 8  then");
});
const promise8 = new Promise(function (resolve, reject) {
  resolve("promise 8");
}).then((result) => console.log(result));
queueMicrotask(() => {
  console.log("this is before promise 9  then");
});
const promise9 = new Promise(function (resolve, reject) {
  resolve("promise 9");
}).then((result) => console.log(result));
console.log("after promise 9");
const promise10 = new Promise(function (resolve, reject) {
  setTimeout(() => console.log("inside set timeout"), 4000);
  resolve("promise10");
  queueMicrotask(() => console.log("inside queueMicrotask"));
}).then((result) => console.log(result));
