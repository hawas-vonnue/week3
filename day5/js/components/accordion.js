function accordion(button, content) {
  button.addEventListener("click", () => {
    content.classList.toggle("open");
    content.style.overflow = "hidden";
    console.log();
    if (content.classList.contains("open")) {
      button.ariaExpanded = "true";
      content.style.maxHeight = "0px";
    } else {
      button.ariaExpanded = "false";
      content.style.maxHeight = "500px";
    }
  });
}

