let parentCount = 0;
let childCount = 0;
let blog1 = [];
let map = new Map();

class Comment {
  constructor(id, text) {
    this.id = id;
    this.text = text;
    this.innerComments = [];
  }
}
const commentSections = document.querySelectorAll(".card .commentSection");
const addCommentButtons = document.querySelectorAll(
  ".commentSection .addComments button",
);
addCommentButtons.forEach((addCommentButton) => {
  addCommentButton.addEventListener("click", (event) => {
    const commentContainer = event.target.parentElement.previousElementSibling;
    const input = event.target.previousElementSibling;
    console.log(input.value);
    let comment = createComment(input.value, parentCount);
    parentCount++;
    commentContainer.appendChild(comment);
    let obj = new Comment(comment.id, input.value);
    map.set(comment.id, obj);
    blog1.push(obj);
    input.value = "";
    upateLocalStorage();
  });
});

function upateLocalStorage() {
  blog1.forEach((element) => {
    localStorage.setItem(element.id, JSON.stringify(element));
  });
}
const commentContainers = document.querySelectorAll(".comments");
commentContainers.forEach((commentContainer) => {
  commentContainer.addEventListener("click", (event) => {
    if (event.target.className === "send") {
      const parent = event.target.parentElement.parentElement;
      let value = event.target.previousElementSibling.value;
      const comment = createComment(value, childCount);
      childCount++;
      parent.appendChild(comment);
      event.target.previousElementSibling.value = "";
      event.target.parentElement.classList.add("hidden");
      let parentObj = map.get(parent.id);
      let obj = new Comment(comment.id, value);
      map.set(comment.id, obj);
      parentObj.innerComments.push(obj);
      upateLocalStorage();
      console.log(map);
    }
    if (event.target.className === "reply") {
      const replyForm = event.target.parentElement.nextElementSibling;
      replyForm.classList.toggle("hidden");
    }
  });
});

function createComment(text, id) {
  let comment = document.createElement("div");
  comment.textContent = text;
  comment.classList.add("comment");
  let likeButton = document.createElement("button");
  likeButton.innerHTML = `<svg
                          xmlns="xmlw3.org/2000/svgxml"
                          viewBox="0 0 24 24"
                          width="14"
                          height="14"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 1.95-1.57l1.3-6a2 2 0 0 0-.3-1.78A2 2 0 0 0 21.28 12H16"
                          />
                          <path d="M9 22H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h5" />
                        </svg>`;
  let button = document.createElement("button");
  button.innerText = "reply";
  button.classList.add("reply");
  const buttonContainer = document.createElement("div");
  buttonContainer.appendChild(button);
  buttonContainer.appendChild(likeButton);
  const replyForm = document.createElement("div");
  //innerHTML is not used for inputs
  replyForm.innerHTML = `             
                <input type="text" id="comment" placeholder="type reply here" style="flex-grow:1"/>
                <button class="send">post</button>`;
  replyForm.classList.add("hidden");
  comment.appendChild(buttonContainer);
  comment.appendChild(replyForm);
  comment.id = id;

  return comment;
}

function createNestedComment(obj) {
  if (obj.innerComments.length === 0) {
    childCount = obj.id;
    childCount++;
    map.set(obj.id, obj);
    return createComment(obj.text, obj.id);
  }
  let parentComment = createComment(obj.text, obj.id);
  obj.innerComments.forEach((innerComment) => {
    let child = createNestedComment(innerComment);
    parentComment.appendChild(child);
  });
  map.set(obj.id, obj);
  return parentComment;
}
let c = 0;
while (true) {
  if (localStorage.getItem(c) === null) break;
  let obj = JSON.parse(localStorage.getItem(c));
  c++;
  // let comment = createComment(obj.text, obj.id);
  // // if (obj.innerComments.length !== 0) {
  // //   obj.innerComments.forEach((innerComment) => {
  // //     let childComment = createComment(innerComment.text, innerComment.id);
  // //     comment.appendChild(childComment);
  // //     count = innerComment.id;
  // //   });
  // // }
  blog1.push(obj);
  parentCount = obj.id;
  parentCount++;
  let comment = createNestedComment(obj);
  const comments = document.querySelector(".comments");
  comments.appendChild(comment);
}
