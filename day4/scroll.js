async function fetchPosts(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("error in fetching");
    }
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    throw new Error(error);
  }
}
let N = 0;
const feedElement = document.querySelector(".feed");
const spinnerContainer = document.querySelector(".spinnerContainer");
const retryButton = document.querySelector(".retryButton");

function onLoad() {
  if (N >= 100) {
    const endElement = document.querySelector(".end");
    endElement.textContent = "End of feed";
    spinnerContainer.classList.add("hidden");
    retryButton.classList.add("hidden");
    return;
  }
  let url = `https://jsonplaceholder.typicode.com/posts?_start=${N}&_limit=10`;
  fetchPosts(url).then(
    (response) => {
      for (let i = 0; i < 10; i++) {
        let postElement = createPost(
          response[i].title,
          response[i].body,
          response[i].userId,
          response[i].id,
        );
        feedElement.appendChild(postElement);
      }
      N = N + 10;
      retryButton.classList.add("hidden");
    },
    (error) => {
      spinnerContainer.classList.add("hidden");
      retryButton.classList.remove("hidden");
      //to avoid intersection observer calling the onLoad function
      sentinelElement.classList.add("hidden");
    },
  );
}

function createPost(title, body, userId, id) {
  const postElement = document.createElement("div");
  postElement.classList.add("post");
  const titleElement = document.createElement("span");
  titleElement.classList.add("title");
  titleElement.textContent = title;
  const bodyElement = document.createElement("span");
  bodyElement.classList.add("body");
  bodyElement.textContent = body;
  const userIdElement = document.createElement("span");
  userIdElement.classList.add("userId");
  userIdElement.textContent = "user id:" + userId;
  const topElement = document.createElement("div");
  topElement.classList.add("top");
  const idElement = document.createElement("span");
  idElement.classList.add("id");
  idElement.textContent = id;
  topElement.appendChild(idElement);
  topElement.appendChild(titleElement);
  postElement.appendChild(topElement);
  postElement.appendChild(userIdElement);
  postElement.appendChild(bodyElement);

  return postElement;
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      spinnerContainer.classList.remove("hidden");
      onLoad();
    }
  });
});
const sentinelElement = document.querySelector(".sentinel");
observer.observe(sentinelElement);
retryButton.addEventListener("click", () => {
  spinnerContainer.classList.remove("hidden");
  onLoad();
  sentinelElement.classList.remove("hidden");
});
