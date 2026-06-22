function createCounter() {
  let count = 0;
  function increment() {
    count = count + 1;
  }
  function decrement() {
    count = count - 1;
  }
  function getCount() {
    return count;
  }
  function reset() {
    count = 0;
  }
  return {
    increment,
    decrement,
    getCount,
    reset,
  };
}
const counter = createCounter();
const counter2 = createCounter();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());
console.log(counter2.getCount());
counter.decrement();
console.log(counter.getCount());
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount());
counter.reset();
counter2.increment();
console.log(counter2.getCount());
console.log(counter.getCount());
//memoize function
const memoize = (func) => {
  const map = new Map();
  return (...args) => {
    // console.log(map);
    let key = args.join(",");
    if (!map.has(key)) {
      console.log("adding to cache");
      let value = func.apply(this, args);
      map.set(key, value);
    } else console.log("fetching from cache");
    return map.get(key);
  };
};
//fibonacci function
function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// console.log("fibonacci:"+fibonacci(4));
const memoizeFibonacci = memoize(fibonacci);
console.time("firstCall");
console.log(memoizeFibonacci(20));
console.timeEnd("firstCall");
console.time("secondCall");
console.log(memoizeFibonacci(20));
console.timeEnd("secondCall");
//once function
const once = (func) => {
  let count = 0;
  let value;
  return (...args) => {
    if (count == 0) {
      value = func.apply(this, args);
      count++;
      return value;
    }
    return value;
  };
};
function add(num1, num2) {
  return num1 + num2;
}
const addOnce = once(add);
console.log(addOnce(1, 2));
console.log(addOnce(2, 3));
//create rate limiter
function createRateLimiter(fn, maxCalls, windowMs) {
  let timeOfFunctionCalls = [];
  return (...args) => {
    let numberOfFunctionCallInWindow = timeOfFunctionCalls.filter((time) => {
      return Date.now() - time < windowMs;
    });
    // console.log(numberOfFunctionCallInWindow);
    if (numberOfFunctionCallInWindow.length < maxCalls) {
      timeOfFunctionCalls.push(Date.now());
    //   console.log("timeOfFunctionCalls:" + timeOfFunctionCalls);
      let value = fn.apply(this, args);
      return value;
    } else throw new Error("Exceeded maximum limit");
  };
}
const function1 = createRateLimiter(add, 2, 6000);
console.log(function1(1, 2));
console.log(function1(2, 3));
setTimeout(() => {
  console.log(function1(5, 6));
  console.log(function1(7, 8));
}, 6000);
