const parent = document.querySelector(".parent");
parent.addEventListener("click", (event) => {
  if (event.target.matches("input[type='checkbox']")) {
    if (event.target.checked) {
      const text = event.target.nextSibling;
      text.style.textDecoration = "line-through";
    } else {
      const text = event.target.nextSibling;
      text.style.textDecoration = "none";
    }
  } else if (event.target.matches("button")) {
    const listElement = event.target.closest("li");
    listElement.remove();
  } else if (event.target.matches("span")) {
    event.target.setAttribute("contenteditable", "true");
  }
});
function createTodo(text) {
  let liElement = document.createElement("li");
  let checkboxElement = document.createElement("input");
  checkboxElement.setAttribute("type", "checkbox");
  let spanElement = document.createElement("span");
  spanElement.textContent = " "+text+" ";
  let button = document.createElement("button");
  button.textContent = "Delete";
  liElement.appendChild(checkboxElement);
  liElement.appendChild(spanElement);
  liElement.appendChild(button);
  parent.appendChild(liElement);
}
for(let i=0;i<10;i++){
    createTodo("to do "+i);
}