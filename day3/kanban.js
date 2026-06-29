let selectedTask = "";
let currentColumn = 0;

function updateInnerHtml() {
  columns.forEach((column) => {
    localStorage.setItem(column.className, column.innerHTML);
  });
}
const columns = document.querySelectorAll(".column");
columns.forEach((column) => {
  column.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
  column.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("id", event.target.id);
  });
  column.addEventListener("drop", (event) => {
    const currentElement = event.currentTarget;
    const id = event.dataTransfer.getData("id");
    const element = document.getElementById(id);
    currentElement.appendChild(element);
    event.currentTarget.classList.remove("dragon");
    updateInnerHtml();
  });
  column.addEventListener("dragenter", (event) => {
    event.currentTarget.classList.add("dragon");
  });
  column.addEventListener("dragleave", (event) => {
    event.currentTarget.classList.remove("dragon");
  });
});
window.addEventListener("keydown", (event) => {
  if (document.activeElement.className !== "task") return;
  if (event.code === "Space") {
    event.preventDefault();
    selectedTask = document.activeElement.id;
  }
  if (event.code === "ArrowRight") {
    let currentColumnClass = document.activeElement.parentElement.className;
    columns[currentColumn].classList.remove("dragon");
    currentColumn = (((currentColumn + 1) % 3) + 3) % 3;
    const column = columns[currentColumn];
    column.classList.add("dragon");
  }
  if (event.code === "ArrowLeft") {
    let currentColumnClass = document.activeElement.parentElement.className;
    columns[currentColumn].classList.remove("dragon");
    currentColumn = (((currentColumn - 1) % 3) + 3) % 3;
    const column = columns[currentColumn];
    column.classList.add("dragon");
  }
});
window.addEventListener("keyup", (event) => {
  if (document.activeElement.className !== "task") return;
  if (event.code === "Space") {
    event.preventDefault();
    const element = document.getElementById(selectedTask);
    const column = columns[currentColumn];
    column.appendChild(element);
    column.classList.remove("dragon");
    updateInnerHtml();
  }
});
const buttons = document.querySelectorAll(".create button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    addTask(event);
  });
  button.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
      event.preventDefault();
    }
  });
});
let count;
if (localStorage.getItem("count") !== null)
  count = localStorage.getItem("count");
else count = 0;

function deleteTask() {
  const element = event.target.parentElement;
  const parent = element.parentElement;
  element.remove();
  localStorage.setItem(parent.className, parent.innerHTML);
}

function addTask(event) {
  const task = document.createElement("span");
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  task.textContent = event.target.previousElementSibling.value;
  task.setAttribute("draggable", true);
  task.appendChild(deleteButton);
  task.id = count;
  count++;
  task.tabIndex = 0;
  task.classList.add("task");
  localStorage.setItem("count", count);
  const tasksElement =
    event.target.parentElement.parentElement.querySelector(".column");
  tasksElement.appendChild(task);
  const input = event.target.previousElementSibling;
  input.value = "";
  update();
  updateInnerHtml();
}

function update() {
  const deleteButtons = document.querySelectorAll(".column span button");
  deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", (event) => {
      deleteTask(event);
    });
  });
}
if (localStorage.getItem("column todo") !== null) {
  columns[0].innerHTML = localStorage.getItem("column todo");
}
if (localStorage.getItem("column progress") !== null) {
  columns[1].innerHTML = localStorage.getItem("column progress");
}
if (localStorage.getItem("column done") !== null) {
  columns[2].innerHTML = localStorage.getItem("column done");
}
update();
