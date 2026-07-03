import { openDrawer } from "./components/nav.js";
import { darkModeToggle } from "./components/darkMode.js";
import { accordion } from "./components/accordion.js";
import { lightBox } from "./components/lightbox.js";
import { scrollAnimation } from "./components/scroll.js";
import { progressBar } from "./components/progress.js";

window.onload = (event) => {
  let toggleElement = document.querySelector("#checkbox");
  darkModeToggle(toggleElement);
  let hamburgerElement = document.querySelector("#menu");
  let drawerElement = document.querySelector(".drawer");
  openDrawer(hamburgerElement, drawerElement);
  const faqs = document.querySelectorAll(".faqSection .faq");
  faqs.forEach((faq) => {
    const questionElement = faq.querySelector(".question");
    const answerElement = faq.querySelector(".answer");
    accordion(questionElement, answerElement);
  });
  if (window.location.href.includes("team.html")) {
    lightBox();
  }
  if (window.location.href.includes("index.html")) {
    scrollAnimation();
  }
  const backToTopButton = document.querySelector(".back-to-top");
  window.addEventListener("scroll", () => {
    if (scrollY >= 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });
  backToTopButton.addEventListener("click", (event) => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
  progressBar("index.html");
};
