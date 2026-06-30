class HttpError extends Error {
  constructor(message) {
    super(message);
  }
}
const url = "https://jsonplaceholder.typicode.com/posts";

async function fetch1() {
  const response = await fetch(url);
  console.log(response.status);
  const headers = response.headers;
  console.log(headers);
}
fetch1();

async function fetchJSON(url, options) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new HttpError("Http error");

    return response.json();
  } catch (error) {
    console.log("Time exceeded 5seconds");
  }
}
console.log(
  await fetchJSON("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/JSON",
    },
    body: JSON.stringify({ hello: "hi" }),
  }),
);
console.log(await fetchJSON(url, { signal: AbortSignal.timeout(5000) }));
