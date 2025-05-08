console.log("Hello World!");

console.log("Hello World!");

console.log("Hello World!");

console.log("Hello World!");

let a = 10;

let b = 20;

let c = a + b;

console.log(c); //30

console.log("Hello World!");

console.log("Hello World!");

setTimeout(() => {
  console.log("Hello ASYNC World!");
}, 0);

console.log("Hello World!");

console.log("Hello World!");

console.log("Before");
const user = getUser();
console.log(user);
console.log("After");

function getUser() {
  setTimeout(function () {
    console.log("DB Query entertained");
    return { id: 9, name: "usman" };
  }, 1000);
  return dummy;
}

//Before
//Dummy
//After
//DB Query entertained
//{ id: 9, name: 'usman' }

// Call Back Example

function getUser(id, callback) {
  setTimeout(function () {
    console.log("DB Query entertained");
    callback({ id: id, name: "usman" });
  }, 1000);
}

function getUserDetails(user) {
  console.log("User Details: ", user);
}
getUser(1, getUserDetails); //DB Query entertained

//User Details:  { id: 1, name: 'usman' }

// Promise Example

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("DB Query entertained");
      resolve({ id: id, name: "usman" });
    }, 1000);
  });
}

function getUserDetails(user) {
  console.log("User Details: ", user);
}

getUser(1)
  .then(getUserDetails)
  .catch((err) => console.log("Error: ", err)); //DB Query entertained

// Async/Await Example

async function getUser(id) {
  let user = await new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("DB Query entertained");
      resolve({ id: id, name: "usman" });
    }, 1000);
  });
  return user;
}

// fetch api data using async/await

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    let postContainer = document.getElementById("posts"); // Renamed for clarity
    data.forEach((postData) => {
      // Renamed to avoid conflict
      let p = document.createElement("p");
      p.innerHTML = postData.title; // Use postData instead of post
      postContainer.appendChild(p); // Append to postContainer
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

let btn = document.getElementById("dataBtn");
btn.addEventListener("click", fetchData);