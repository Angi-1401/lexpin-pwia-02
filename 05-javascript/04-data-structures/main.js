/**
 * Data structures
 *
 * - Array: an ordered collection of elements, accessible by index.
 */

console.log("Creating arrays (I):");

// Let's say we have multiple car models like this
let car1 = "Saab";
let car2 = "Volvo";
let car3 = "Toyotita";

// We can store them in an array instead of separate variables
let cars = ["Saab", "Volvo", "Toyotita"];
console.log(`Cars array: ${cars}`);

console.log("Accessing arrays:");
console.log(cars[0]); // First position
console.log(cars[1]); // Second position
console.log(cars[2]); // Third position

console.log("Creating arrays (II):");

// We can also create an empty array and add elements later
let moreCars = [];
moreCars[0] = "BMW";
moreCars[1] = "Audi";
moreCars[2] = "Mercedes";

console.log(`More cars array: ${moreCars}`);

// Basic Arrays Methods
let fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log("Basic arrays methods:");

// length property
console.log(`Number of fruits: ${fruits.length}`);

// toString()
console.log(`Fruits as string: ${fruits.toString()}`);
// join()
console.log(`Fruits joined with -: ${fruits.join(" - ")}`);

// Manipulating data inside the array

// Adding elements (at the end)
fruits.push("Pineapple");
console.log(`Fruits after push: ${fruits}`);

// Removing the last element
fruits.pop();
console.log(`Fruits after pop: ${fruits}`);

// Removing the first element
fruits.shift();
console.log(`Fruits after shift: ${fruits}`);

// Adding an element at the beginning
fruits.unshift("Strawberry");
console.log(`Fruits after unshift: ${fruits}`);

// Removing an element from a specific position
fruits.splice(1, 1); // Removes 1 element at index 1
console.log(`Fruits after splice: ${fruits}`);

// Create a new array from a portion of an existing array
let citrusFruits = fruits.slice(1, 3); // Creates a new array with elements from index 1 to 2
console.log(`Citrus fruits: ${citrusFruits}`);

// Sorts the array elements in ascending order
fruits.sort();
console.log(`Fruits after sort: ${fruits}`);

// Reverse the order of the array elements (descending order)
fruits.reverse();
console.log(`Fruits after reverse: ${fruits}`);

/**
 * Data structures
 *
 * - Object: a collection of key-value pairs, where keys are strings and values
 * can be any type.
 */

console.log("Creating objects:");

let person = {
  firstName: "Julio",
  lastName: "Centeno",
  age: 32,
  nacionality: "Lilliputian",
  hobbies: ["Reading", "Traveling", "Coding"],
};

console.log(`Person object: ${JSON.stringify(person)}`);

// Accessing object properties
console.log(`First name: ${person.firstName}`);
console.log(`Last name: ${person.lastName}`);
console.log(`Age: ${person.age}`);
console.log(`Nacionality: ${person.nacionality}`);
console.log(`Hobbies: ${person.hobbies.join(", ")}`);

// Modifying object properties
person.age = 33;
person.nacionality = "Canadian";
person.hobbies.push("Swimming");

console.log(`Person object after modifications: ${JSON.stringify(person)}`);

// Adding a new property to the object
person.profession = "Software Developer";
console.log(`Person object after adding profession: ${JSON.stringify(person)}`);

// Deleting properties on the object
delete person.profession;
console.log(
  `Person object after deleting profession: ${JSON.stringify(person)}`,
);

// Checking if a property exists in the object
console.log(`Does person have age property? ${"age" in person}`);
console.log(`Does person have profession property? ${"profession" in person}`);

// Representing tables in JS with arrays of objects

let people = [
  {
    firstName: "Julio",
    lastName: "Centeno",
    age: 32,
    nacionality: "Canadian",
    completeAddress: {
      country: "Canada",
      city: "Toronto",
      postalCode: "M5H 2N2",
      address: "123 Main St",
    },
    hobbies: ["Reading", "Traveling", "Coding"],
  },
  {
    firstName: "Alice",
    lastName: "Smith",
    age: 28,
    nacionality: "American",
    completeAddress: {
      country: "USA",
      city: "New York",
      postalCode: "10001",
      address: "456 Elm St",
    },
    hobbies: ["Cooking", "Hiking"],
  },
  {
    firstName: "Bob",
    lastName: "Johnson",
    age: 40,
    nacionality: "British",
    completeAddress: {
      country: "UK",
      city: "London",
      postalCode: "SW1A 1AA",
      address: "789 Oak St",
    },
    hobbies: ["Gardening", "Fishing"],
  },
];
console.log(`People array: ${JSON.stringify(people)}`);

// Accessing elements in the array of objects
console.log(`Second person is ${people[1].firstName} ${people[1].lastName}`);

console.log(people[0].hobbies[1]);
