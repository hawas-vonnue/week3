const first = document.getElementsByClassName("first-level")[0];
const second = document.getElementsByClassName("second-level")[0];
const third = document.getElementsByClassName("third-level")[0];
first.addEventListener(
  "click",
  (event) => {
    alert("event capturing phase:" + first.tagName);
    console.log("phase name:capture");
    console.log("element" + first);
    event.stopPropagation();
  },
  true,
);
first.addEventListener("click", (event) => {
  alert("event bubble phase:" + first.tagName);
  console.log("phase name:bubble");
  console.log("element" + first);
  event.stopPropagation();
});
second.addEventListener(
  "click",
  (event) => {
    alert("event capturing phase:" + first.tagName);
    console.log("phase name:capture");
    console.log("element" + first);
    event.stopPropagation();
  },
  true,
);
second.addEventListener("click", (event) => {
  alert("event bubble phase:" + first.tagName);
  console.log("phase name:bubble");
  console.log("element" + first);
  event.stopPropagation();
});
third.addEventListener(
  "click",
  (event) => {
    alert("event capturing phase:" + first.tagName);
    console.log("phase name:capture");
    console.log("element" + first);
  },
  true,
);
third.addEventListener("click", (event) => {
  alert("event bubble phase:" + first.tagName);
  console.log("phase name:bubble");
  console.log("element" + first);
});
const element = document.getElementsByClassName("same-element")[0];
element.addEventListener("click", (event) => {
  alert("on click");
  event.stopImmediatePropagation();
});
element.addEventListener("click", (event) => {
  alert("on click 2");
  event.stopImmediatePropagation();
});
const form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
const anchorTag = document.getElementsByTagName("a")[0];
anchorTag.addEventListener("click", (event) => {
  event.preventDefault();
});
