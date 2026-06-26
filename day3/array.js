orders = [
  {
    orderId: 10,
    items: [11, 12, 13, 14],
  },
  {
    orderId: 10,
    items: [15, 16, 17, 18],
  },
];
let parentId = 10;
let allItems = orders.flatMap((obj) => {
  if (obj.orderId === parentId) return obj.items;
});
console.log(allItems);

let log = [
  {
    id: 101,
    entry: "sucess",
  },
  {
    id: 102,
    entry: "error",
  },
  {
    id: 103,
    entry: "error",
  },
];
//finding recent error entry
//finding findLast
const lastError = log.findLast((obj) => {
  if (obj.entry === "error") return obj;
});
console.log(lastError);
//using findLastIndex
const lastErrorIndex = log.findLastIndex((obj) => {
  if (obj.entry === "error") return obj;
});
const lastError2 = log[lastErrorIndex];
console.log(lastError2);

function chunk(arr, size) {
  const chunkedArray = [];
  for (let i = 0; i < arr.length; i = i + size) {
    let index = i + size;
    //no need for this because if end >arr.length slice consider end = arr.length
    // if (index > arr.length) {
    //   index = arr.length;
    // }
    console.log(i, index);
    chunkedArray.push(arr.slice(i, index));
  }
  return chunkedArray;
}
let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(chunk(arr, 2));

function zip(...arrays) {
  const maxLength = Math.max(...arrays.map((a) => a.length));
  let zipArray = Array.from({ length: maxLength }, (_, i) =>
    arrays.map((a) => a[i]),
  );
  return zipArray;
}
console.log(zip(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]));
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];
function groupBy(arr, keyfn) {
  const newGroup = {};
  arr.forEach((element) => {
    const key = keyfn(element);
    if (!newGroup[key]) newGroup[key] = [];
    newGroup[key].push(element);
  });
  return newGroup;
}

function daysInMonth(year, month) {
  // Use 1 for January, 2 for February, etc.
  return new Date(year, month + 1, 0).getDate();
}

function selection(obj) {
  if (obj.quantity < 6) return "restock";
  else return "sufficient";
}
console.log(groupBy(inventory, selection));
const monthCalendar = Array.from({ length: 12 }, (_, i) => {
  let month = new Date(0, i).toLocaleDateString("en", { month: "long" });
  let daysIn = daysInMonth(0, i);
  let days = Array.from({ length: daysIn }, (_, i) => i + 1);
  let obj = {};
  obj[month] = days;
  return obj;
});
console.log(monthCalendar);
