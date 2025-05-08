const greet = (name = "Guest") => `Hello, ${name}`;
console.log(greet("Alice"));

/*  let and const  */
let name = "Alice";
const age = 25;
name = "Bob"; // allowed
// age = 30; // error: can't reassign const

/*arrow function*/
const add = (a, b) => a + b;

console.log(add(2, 3)); // 5


setTimeout(function () {
    console.log("DB-1 Query entertained");
  }, 0);
  
  console.log("1");
  console.log("2");
  console.log("3");
  
  setTimeout(function () {
    console.log("DB-2 Query entertained");
  }, 10); // ← You missed a comma here in your version
  
  console.log("4");
  console.log("5");
  
  console.log("6"); // ← You had a typo: 'console,log'
  

