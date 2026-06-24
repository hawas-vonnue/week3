const serviceCards = document.querySelectorAll(".container .service-card");
const searchInput = document.querySelector(".search input");
const notFound = document.querySelector(".not-found");
let timer;
searchInput.addEventListener("keyup", (event) => {
  //   console.log(searchInput.textContent);
  clearTimeout(timer);
  timer = setTimeout(() => {
    const searchValue = searchInput.value.trim();
    const regex = new RegExp(searchValue, "gi");
    let text;
    console.log(searchValue);
    for (const serviceCard of serviceCards) {
      serviceCard.style.display = "revert";
      text = serviceCard.innerHTML;
      text = text.replace(/(<span class="highlight">|<\/span>)/gim, "");
      console.log(text);
      serviceCard.innerHTML = text;
    }
    notFound.style.display = "none";
    let count = 0;
    for (const serviceCard of serviceCards) {
      if (!serviceCard.innerText.toLowerCase().includes(searchValue)) {
        serviceCard.style.display = "none";
        count++;
      } else {
        text = serviceCard.innerHTML;
        const newText = text.replace(
          regex,
          '<span class="highlight">$&</span>',
        );
        if (searchValue !== "") serviceCard.innerHTML = newText;
      }
    }
    if (count === serviceCards.length) {
      notFound.style.display = "inline-block";
    }
  }, 300);
});
// for event input,for x button inside the input and also for other
// input types like paste etc,this alone is enough added keyup handler too because task ask to do so
searchInput.addEventListener("input", (event) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    const searchValue = searchInput.value.trim();
    const regex = new RegExp(searchValue, "gi");
    let text;
    console.log(searchValue);
    for (const serviceCard of serviceCards) {
      serviceCard.style.display = "revert";
      text = serviceCard.innerHTML;
      text = text.replace(/(<span class="highlight">|<\/span>)/gim, "");
      serviceCard.innerHTML = text;
    }
    notFound.style.display = "none";
    let count = 0;
    for (const serviceCard of serviceCards) {
      if (!serviceCard.innerText.toLowerCase().includes(searchValue)) {
        serviceCard.style.display = "none";
        count++;
      } else {
        text = serviceCard.innerHTML;
        const newText = text.replace(
          regex,
          '<span class="highlight">$&</span>',
        );
        if (searchValue !== "") serviceCard.innerHTML = newText;
      }
    }
    if (count === serviceCards.length) {
      notFound.style.display = "inline-block";
    }
  }, 300);
});
