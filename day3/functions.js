const fs = require("fs");
const { type } = require("os");

function impureUpdateUser(users, id, changes) {
  users.splice(id, 1, changes);
}
users = ["hello", "hii", "world", "this"];
impureUpdateUser(users, 1, "test");
console.log(users);
function pureUpdateUser(users, id, changes) {
  let arr = users.slice(0, users.length);
  console.log(arr);
  arr.splice(id, 1, changes);
  return arr;
}
let arr = pureUpdateUser(users, 1, "java");
console.log(arr);
console.log(users);

function parseCSV(data) {
  let csv = [];
  let dataLines = data.split(/\r?\n/);
  const csvHeadings = dataLines[0].split(/,/);
  for (let i = 1; i < dataLines.length; i++) {
    let dataValues = dataLines[i].split(/,/);
    let obj = {};
    for (let j = 0; j < csvHeadings.length; j++) {
      obj[csvHeadings[j]] = dataValues[j];
    }
    csv.push(obj);
  }
  return csv;
}

function validateRows(parsedCsv) {}
fs.readFile("csv.txt", (err, data) => {
  if (err) throw err;
  let csv = data.toString();
  let parsedCsv = parseCSV(csv);
  // console.log(parsedCsv);
  // console.log(validateRows(csv));
});

function deepFreeze(obj) {
  if (obj && typeof obj === "object" && !Object.isFrozen(obj)) {
    Object.freeze(obj);
    Object.getOwnPropertyNames(obj).forEach((property) =>
      deepFreeze(obj[property]),
    );
  }
  return obj;
}
let myObj3 = {
  d: 22,
  m: 9,
  o: { c: "MVD", i: "UY", f: { a: 56 } },
};
myObj3 = deepFreeze(myObj3);
console.log(myObj3);
myObj3.d = 8888;
myObj3.o.f.a = 9999;
console.log(myObj3);
