/**
 * Loops
 *
 * Loops are control structures that allow you to repeat a block of
 * code multiple times.
 *
 * Types:
 * - for: loops through a block of code a number of times.
 * - while: loops through a block of code while a specified condition
 *   is true.
 * - do...while: loops through a block of code once, and then repeats
 *   the loop while a specified condition is true.
 * - for...in: loops through the properties of an object.
 * - for...of: loops through the values of an iterable object (like an
 *   array).
 */

console.log("Multiplication Table of 7");

console.log(`1 * 7 = ${1 * 7}`);
console.log(`2 * 7 = ${2 * 7}`);
console.log(`3 * 7 = ${3 * 7}`);
// ...
console.log(`10 * 7 = ${10 * 7}`);

// While loop
console.log("Multiplication Table of 7 (While loop)");

let i = 0;
while (i <= 10) {
  console.log(`${i} * 7 = ${i * 7}`);
  i++;
}

console.log("Simulates user selecting options (while loop)");

const OPTIONS = [1, 2, 3, 4];
let selectedOption = OPTIONS[0]; // Example selection

while (selectedOption >= 1 && selectedOption <= 3) {
  switch (selectedOption) {
    case 1:
      console.log("Option 1 selected");
      break;
    case 2:
      console.log("Option 2 selected");
      break;
    case 3:
      console.log("Option 3 selected");
      break;
  }
  // Simulates an user input from the OPTIONS array
  selectedOption = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
}

// Do...while loop

console.log("Simulates user selecting options (do..while loop)");

do {
  // Simulates an user input from the OPTIONS array
  selectedOption = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];

  switch (selectedOption) {
    case 1:
      console.log("Option 1 selected");
      break;
    case 2:
      console.log("Option 2 selected");
      break;
    case 3:
      console.log("Option 3 selected");
      break;
    default:
      console.log(`Option ${selectedOption} selected: Exiting program`);
      break;
  }
} while (selectedOption >= 1 && selectedOption <= 3);

// For loop
console.log("Multiplication Table of 7 (For loop)");
for (let i = 0; i <= 10; i++) {
  console.log(`${i} * 7 = ${i * 7}`);
}

console.log("Christmas Tree Pattern");
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}

// for ... in

let numbers = [1, 2, 3, 4, 5];

let person = {
  name: "John Doe",
  age: 30,
  occupation: "Developer",
};

console.log("Using for...in loop to iterate over person object");
for (let key in person) {
  console.log(`Key: ${key}, Value: ${person[key]}`);
}

console.log("Using for...in loop to iterate over numbers array");
for (let index in numbers) {
  console.log(`Index: ${index}, Value: ${numbers[index]}`);
}

console.log("Multiply each value in the numbers array by 2");
for (let index in numbers) {
  console.log(`Index: ${index}, Value: ${numbers[index] * 2}`);
}

// for ... of

console.log("Using for...of loop to iterate over person object");
for (let value of Object.values(person)) {
  // Object.values returns an array of the object's values
  console.log(`Value: ${value}`);
}

console.log("Using for...of loop to iterate over numbers array");
for (let value of numbers) {
  console.log(`Value: ${value}`);
}

console.log(
  "Multiply each value in the numbers array by 2 using for...of loop",
);
for (let value of numbers) {
  console.log(`Value: ${value * 2}`);
}

/**
 * Common consensus is:
 *  to use for...of loop for arrays and
 *  for...in loop for objects
 */



