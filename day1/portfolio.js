const name = document.getElementById("name");
name.style.color = "blue";
const header2 = document.getElementsByClassName("header2");
for (let i = 0; i < header2.length; i++) {
  header2[i].addEventListener("click", (e) => {
    header2[i].style.color = "blue";
  });
}
const links = document.getElementsByTagName("a");
for (link of links) {
  link.style.color = "blue";
}
const subheader = document.querySelector(".header2 p");
subheader.style.fontSize = "24px";
const overlay = document.querySelectorAll(".overlay");
for (i of overlay) {
  i.style.backgroundColor = "red";
}
const header = name.parentNode;
// header.style.backgroundColor = "red";
console.log(header);
console.log(header.firstChild);
console.log(header.lastChild);
const box = document.querySelector(".box");
console.log(box.nextElementSibling);

function addCard(title, body, imageUrl, id) {
  let card = document.createElement("div");
  card.id = id;
  card.classList.add("card");
  let image = document.createElement("img");
  let titleElement = document.createElement("h3");
  titleElement.textContent = title;
  let bodyElement = document.createElement("div");
  bodyElement.textContent = body;
  image.src = imageUrl;
  card.appendChild(titleElement);
  card.appendChild(image);
  card.appendChild(bodyElement);
  document.getElementById("container1").appendChild(card);
}
addCard(
  "hello",
  "this is the body of the newly added card",
  "https://loremflickr.com/320/240",
  "card1",
);
addCard(
  "heading of second card",
  "this is the body of the newly added card",
  "https://loremflickr.com/320/240",
  "card2",
);

function removeCard(id) {
  document.getElementById(id).remove();
  console.log("element with id " + id + " removed");
}
removeCard("card1");
addCard(
  "heading of third card",
  "this is the body of the newly added card",
  "https://loremflickr.com/320/240",
  "card3",
);

function clearAllCards() {
  let cards = document.querySelectorAll(".card");
  for (card of cards) {
    card.remove();
    console.log("element removed");
  }
}
clearAllCards();
