let id = 10;

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(id);
    }, 3000);
  });
}

async function getOrders() {
  let userId = await getUsers();

  return new Promise((resolve, reject) => {
    if (userId === undefined) reject(new Error("Error:user id is undefined"));
    else resolve(userId);
  });
}

async function getOrderDetail() {
  try {
    let orderId = await getOrders();
    console.log("orderId:", orderId);
  } catch (error) {
    console.log(error);
  }
}
getOrderDetail();

async function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === undefined) reject(new Error("rejected from user"));
      else resolve(id);
    }, 3000);
  });
}
let posts = [
  {
    id: 11,
    heading: "hello",
    comments: ["comment 1", "comment 2", "comment 3"],
  },
  { id: 12, heading: "hiii", comments: ["comment 4", "comment 5"] },
];

async function fetchPosts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(posts), 3000);
  });
}
let todo = ["task1", "task2", "task3", "task4"];

async function fetchTodo() {
  return todo;
}

async function loadDashboard() {
  try {
    console.time("parallel");
    let results = await Promise.all([fetchUser(), fetchPosts(), fetchTodo()]);
    console.timeEnd("parallel");

    return results[1][0].comments;
  } catch (error) {
    return "this is an error:" + error;
  }
}
loadDashboard().then((result) => console.log(result));

async function sequentialLoadDashboard() {
  try {
    console.time("sequential");
    const user = await fetchUser();
    const posts = await fetchPosts();
    const todo = await fetchTodo();
    console.timeEnd("sequential");

    return posts[0].comments;
  } catch (error) {
    return "this is an error:" + error;
  }
}
sequentialLoadDashboard().then((result) => console.log(result));
let names = ["pedri", "cryuff", "dejong"];

async function greet(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("hello " + name), 3000);
  });
}
names.forEach(async (name) => {
  const greeting = await greet(name);
  console.log(greeting);
});
console.log("greetings finished");

async function greetCaller() {
  for (let name of names) {
    const greeting = await greet(name);
    console.log(greeting);
  }
  console.log("greeting2 finished");
}
greetCaller();

async function greetCaller2() {
  let promiseAll = await Promise.all(
    names.map(async (name) => {
      const greeting = await greet(name);
      console.log("greet2 " + greeting);
    }),
  );
  console.log("greeting 3 finished");
}
greetCaller2();
