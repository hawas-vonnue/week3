const content = document.querySelector(".accordion .content");
const checkbox = document.querySelector(".accordion input");
function toggle() {
  content.classList.toggle("open");
  let newAriaExpanded = (checkbox.ariaExpanded !== "true").toString();
  checkbox.ariaExpanded = newAriaExpanded;
  sessionStorage.setItem("ariaExpanded", newAriaExpanded);
}
checkbox.addEventListener("click", () => {
  toggle();
});
const tabParent = document.querySelector(".tabs");
tabParent.addEventListener("click", (event) => {
  const tabInputs = document.querySelectorAll(".tab");
  let count = 0;
  for (let tabInput of tabInputs) {
    tabInput.nextElementSibling.style.display = "none";
    tabInput.ariaExpanded = "false";
  }
  event.target.nextElementSibling.style.display = "inline-block";
  //to make sure radio input is not visible
  for (let tabInput of tabInputs) {
    tabInput.style.display = "none";
  }
  event.target.ariaExpanded = "true";
});
const ratingParent = document.querySelector(".rating");
const stars = document.querySelectorAll(".star");
ratingParent.addEventListener("click", (event) => {
  for (const star of stars) {
    star.innerHTML = "&#9734;";
  }
  for (const star of stars) {
    if (star !== event.target) star.innerHTML = "&#9733;";
    else {
      event.target.innerHTML = "&#9733;";
      break;
    }
    // if (event.target !== ratingParent)
  }
});
const headers = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
for (let header of headers) {
  header.tabIndex = 0;
}
document.addEventListener("keyup", (event) => {
  if (event.code === "ArrowUp") {
    let flag = 0;
    for (let i = 0; i < headers.length; i++) {
      if (document.activeElement === headers[i]) {
        if (i === 0) {
          headers[headers.length - 1].focus();
        } else headers[i - 1].focus();
        flag = 1;
        break;
      }
    }
    if (flag === 0) {
      headers[0].focus();
    }
  }
  if (event.code === "ArrowDown") {
    let flag = 0;
    for (let i = 0; i < headers.length; i++) {
      if (document.activeElement === headers[i]) {
        if (i === headers.length - 1) {
          headers[0].focus();
        } else headers[i + 1].focus();
        flag = 1;
        break;
      }
    }
    if (flag === 0) {
      headers[0].focus();
    }
  }
  let focusables = document.querySelectorAll("[tabindex]");
  if (event.code === "Home") {
    focusables[0].focus();
  }
  if (event.code === "End") {
    focusables[focusables.length - 1].focus();
  }
  if (event.code == "Enter") {
    if (document.activeElement === checkbox) {
      toggle();
    }
  }
});
ariaExpandedValue = sessionStorage.getItem("ariaExpanded");
if (ariaExpandedValue === "true") {
  content.classList.add("open");
  checkbox.ariaExpanded = "true";
  checkbox.checked = true;
}
