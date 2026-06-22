function greet(name, greeting = "Hello") {
  console.log(greeting + " " + name);
}
greet("hawas");
const greet2 = function (name, greeting = "hello") {
  console.log(greeting + " " + name);
};
greet2("hawas");
const greet3 = (name, greeting = "hello") => console.log(greeting + " " + name);
greet3("hawas");
const person = {
  greeting: "Hello",
  greet4: function (name) {
    console.log(this.greeting + " " + name);
  },
};
person.greet4("hawas");
//calculator object
const calculator = {
  add: function (number1, number2) {
    return number1 + number2;
  },
  substract: function (number1, number2) {
    return number1 - number2;
  },
  multiply: function (number1, number2) {
    return number1 * number2;
  },
  divide: function (number1, number2) {
    if (number2 === 0) {
      return "error: cannot divide by zero";
    } else return number1 / number2;
  },
};
console.log(calculator.add(1, 2));
console.log(calculator.substract(5, 1));
console.log(calculator.multiply(3, 2));
console.log(calculator.divide(6, 2));
console.log(calculator.divide(7, 0));
//factory returning function
function createMultiplier(x) {
  return function (y) {
    return x * y;
  };
}
console.log(createMultiplier(4)(10));
console.log(createMultiplier(3)(7) === 21);
//difference between arguments and rest parameters
function test(number1, number2, number3, ...numbers) {
  console.log(arguments);
  console.log(numbers);
}
test(1, 2, 3, 4, 5, 6, 7);
//arrow function cant use arguments
const arrow = (para1, para2) => console.log(arguments);
arrow(54, 45);
