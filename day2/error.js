class ValidationError extends Error {
  constructor(statusCode, message, fieldName) {
    super(message);
    this.statusCode = statusCode;
    this.fieldName = fieldName;
  }
}
function validateEmail(email) {
  if (!email.includes("@")) {
    throw new ValidationError(304, "email must contain @ symbol", "email");
  }
}
try {
  validateEmail("hawas");
} catch (error) {
  console.log(error);
}
function parseUserInput(input) {
  if (typeof input != "number") {
    throw new TypeError("the input must be a number");
  }
  if (input < 0) {
    throw new RangeError("the input must be greater than or equal to 0");
  }
  if (input < 18) {
    throw new ValidationError(
      407,
      "invalid:value must be greater than 18",
      "user input",
    );
  }
  return "valid";
}
try {
  console.log(parseUserInput(21));
} catch (error) {
  if (error instanceof TypeError) {
    console.log("type error");
    console.log(error);
  }
  if (error instanceof RangeError) {
    console.log("Range Error");
    console.log(error);
  }
  if (error instanceof ValidationError) {
    console.log("Validation Error");
    console.log(error);
  }
}
const error = document.querySelector(".error");
const overlay = document.querySelector(".overlay");
const button = document.querySelector("button");
error.addEventListener("click", (event) => {
  throw new ValidationError(400, "invalid:validation error", "user input");
});
window.addEventListener("error", (event) => {
  // overlay.textContent = overlay.textContent + event.type + " " + event.message + "\n";
  overlay.innerHTML = overlay.innerHTML + event.type + " " + event.message + "<br>";
});
button.addEventListener("click", (event) => {
  Promise.reject("Error at " + new Date().toLocaleTimeString()+":Reason here");
});
window.addEventListener("unhandledrejection", (event) => {
  overlay.innerHTML = overlay.innerHTML + "UNHANDLED PROMISE REJECTION:" + event.reason + "<br>";
});
