const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promise 1"), 3000);
});
promise.then((result) => console.log(result));
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("error on promise 2")), 3000);
}).catch((error) => console.log(error));
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(10));
})
  .catch((error) => console.log(error))
  .then((result) => {
    console.log(result);
  });
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("promise4"), 3000);
})
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("error in promise 5")), 3000);
})
  .then((result) => {
    console.log("test");
    console.log(result);
  })
  .catch((error) => console.log(error));
let userId = 10;
const getUser = new Promise((resolve, reject) => {
  resolve(userId);
});
const getOrders = getUser.then((userId) => {
  return new Promise((resolve, reject) => {
    if (userId === undefined) throw new Error("Rejected");
    let orderId = userId + 10;
    resolve(orderId);
  });
});
const getOrderDetail = getOrders
  .catch((error) => console.log(error))
  .then((orderId) => {
    let orderDetails = "order id:" + orderId;
    console.log(orderDetails);
  });
const promise11 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1000), 6000);
});
const promise12 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2000), 6000);
});
const promise13 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Error in promise 13")), 6000);
});
Promise.all([promise, promise11, promise12]).then((values) =>
  console.log(values),
);
Promise.allSettled([promise, promise13]).then((results) => {
  results.forEach((result) => {
    console.log(result.status);
  });
});
Promise.race([promise11, promise]).then((value) =>
  console.log("promise race:", value),
);
