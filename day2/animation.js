const interSectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
});
const features = document.querySelectorAll(".feature");
features.forEach((feature) => {
  interSectionObserver.observe(feature);
});
const sectionHeadings = document.querySelectorAll(".column h2");
sectionHeadings.forEach((sectionHeading) => {
  interSectionObserver.observe(sectionHeading);
});
const backToTopButton = document.querySelector(".back-to-top");
const progressBar = document.querySelector(".reading-progress-bar");
function updateProgressBar() {
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const progress = Math.floor((scrollY / maxScroll) * 100);
  progressBar.style.width = `${progress}%`;
  progressBar.style.backgroundColor = "red";
  requestAnimationFrame(updateProgressBar);
}
window.addEventListener("scroll", () => {
  requestAnimationFrame(updateProgressBar);
  if (scrollY >= 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});
backToTopButton.addEventListener("click", (event) => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});
