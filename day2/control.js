function gradeToLetter(score) {
  if (score <= 100) {
    if (score >= 90) return "A";
    else if (score >= 75) return "B";
    else if (score >= 65) return "C";
    else if (score >= 50) return "D";
    else if (score >= 40) return "E";
    else if (score >= 0) return "F";
    else return "Not a valid mark";
  } else return "Not a valid mark";
}
function gradeToLetter2(score) {
  switch (score) {
    case score >= 90 && score <= 100:
      return "A";
      break;
    case score >= 75:
      return "B";
      break;
    case score >= 65:
      return "C";
      break;
    case score >= 50:
      return "D";
      break;
    case score >= 40:
      return "E";
      break;
    case score >= 0:
      return "F";
      break;
    default:
      return "not a valid mark";
  }
}
function gradeToLetter3(score) {
  let letter;
  score <= 100
    ? score >= 90
      ? (letter = "A")
      : score >= 75
        ? (letter = "B")
        : score >= 65
          ? (letter = "C")
          : score >= 50
            ? (letter = "D")
            : score >= 40
              ? (letter = "E")
              : score >= 0
                ? (letter = "F")
                : (letter = "Not a valid mark")
    : (letter = "Not a valid mark");
  return letter;
}
let obj = {};
for (let i = 0; i < 40; i++) {
  obj[i] = "F";
}
for (let i = 40; i < 50; i++) {
  obj[i] = "E";
}
for (let i = 50; i < 65; i++) {
  obj[i] = "D";
}
for (let i = 65; i < 75; i++) {
  obj[i] = "C";
}
for (let i = 75; i < 90; i++) {
  obj[i] = "B";
}
for (let i = 90; i <= 100; i++) {
  obj[i] = "A";
}
function gradeToLetter4(score) {
  return obj[score];
}
console.time("if else");
for (let i = 1; i <= 1_000_000; i++) {
  gradeToLetter(i);
}
console.timeEnd("if else");
console.time("switch");
for (let i = 1; i <= 1_000_000; i++) {
  gradeToLetter2(i);
}
console.timeEnd("switch");
console.time("ternary");
for (let i = 1; i <= 1_000_000; i++) {
  gradeToLetter3(i);
}
console.timeEnd("ternary");
console.time("object");
for (let i = 1; i <= 1_000_000; i++) {
  gradeToLetter4(i);
}
console.timeEnd("object");
function processQueue(items) {
  let keys = items.keys();
  while (items.size !== 0) {
    let key = keys.next();
    // if (key.done) break;
    console.log("value:" + items.get(key.value));
    items.delete(key.value);
  }
}
function processQueue2(items) {
  let keys = items.keys();
  do {
    let key = keys.next();
    console.log("value:" + items.get(key.value));
    items.delete(key.value);
  } while (items.size !== 0);
}
let myMap = new Map([
  ["a", 1],
  ["b", 3],
  ["d", 10],
]);
processQueue(myMap);
let myMap2 = new Map([
  ["a", 1],
  ["b", 5],
  ["d", 11],
]);
processQueue2(myMap2);
function processQueue3(items) {
  for ([key, value] of items) {
    console.log("key:" + key + " Value:" + value);
  }
}
let myMap3 = new Map([
  ["a", 1],
  ["b", 5],
  ["d", 11],
]);
processQueue3(myMap3);
let dataBase = {
  user1: {
    email: "hawas@gamil.com",
    role: "admin",
  },
  user2: {
    role: "developer",
  },
};
function validateUser(user) {
  if (
    // typeof user !== "undefined"
    dataBase[user.name] &&
    Object.hasOwn(user, "email") &&
    user.email.includes("@") &&
    user.role === "admin"
  ) {
    return "valid";
  }
  return "invalid";
}
user = {
  name: "user1",
  email: "hawas@gamil.com",
  role: "admin",
};
console.log(validateUser(user));
//deeply nested validateUser
function validateUser2(user) {
  if (dataBase[user.name]) {
    if (Object.hasOwn(user, "email")) {
      if (user.email.includes("@")) {
        if (user.role === "admin") {
          return "valid";
        } else return "invalid role";
      } else return "invalid email";
    } else return "email doesnt exist";
  }
  return "User doesnt exist";
}
console.log(validateUser2(user));
// refactored validateUser
function validateUser3(user) {
  if (!dataBase[user.name]) {
    return "User doesnt exist";
  }
  if (!Object.hasOwn(user, "email")) {
    return "email doesnt exist";
  }
  if (!user.email.includes("@")) {
    return "invalid email";
  }
  if (user.role !== "admin") {
    return "invalid role";
  }
  return "valid";
}
console.log(validateUser3(user));