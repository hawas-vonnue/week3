const hamburger = document.getElementById("menu");
const drawer = document.getElementsByClassName("drawer")[0];
hamburger.onclick = (event) => {
  if (drawer.ariaExpanded === "true") {
    drawer.classList.remove("open");
    drawer.ariaExpanded = "true";
    document.body.style.overflow = "visible";
  } else {
    drawer.classList.add("open");
    drawer.ariaExpanded = "true";
    document.body.style.overflow = "hidden";
  }
};
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    drawer.classList.remove("open");
    drawer.ariaExpanded = "false";
    document.body.style.overflow = "visible";
  }
});
drawer.addEventListener("keydown", (event) => {
  let query = ".drawer a[href]:not(disabled])";
  let focusables = document.querySelectorAll(query);
  let firstFocusable = focusables[0];
  let lastFocusable = focusables[focusables.length - 1];
  let isTabPressed = event.key === "Tab";
  if (isTabPressed) {
    if (event.shiftKey) {
      if (document.activeElement === firstFocusable) {
        lastFocusable.focus();
        event.preventDefault();
      }
    }
  } else {
    if (document.activeElement === lastFocusable) {
      firstFocusable.focus();
      event.preventDefault();
    }
  }
});
