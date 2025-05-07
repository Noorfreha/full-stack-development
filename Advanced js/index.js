/* variables*/
let name = "Ayesha";
const age = 25;
var city = "Lahore";
/*variables with inference and reassignment*/
let temperature = 32;
console.log("Initial temperature:", temperature);

temperature = 35;
console.log("Updated temperature:", temperature);

const planet = "Earth";
// planet = "Mars"; // Error: const cannot be reassigned

/* conditional statements */
console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
let score = 85;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 75) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}
/*Conditional Statements (Ternary + Switch) */
let isRaining = true;
let outfit = isRaining ? "Take an umbrella" : "Wear sunglasses";
console.log(outfit);

let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the week!");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    default:
        console.log("Just another day.");
}
/*loops */
for (let i = 1; i <= 5; i++) {
    console.log("Count: " + i);
}

let j = 1;
while (j <= 5) {
    console.log("While count: " + j);
    j++;
}
/* Loops (Nested + Break & Continue) */
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

for (let i = 1; i <= 10; i++) {
    if (i === 5) continue; // Skip 5
    if (i === 8) break; // Stop loop at 8
    console.log(i);
}

/*objects */
let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    start: function () {
        console.log("Car started");
    }
};

console.log(car.make);
car.start();
/*classes */
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
    }
}

let person1 = new Person("Ali", 30);
person1.greet();
/*random numbers */
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log("Random number between 1 and 10:", randomNum);
